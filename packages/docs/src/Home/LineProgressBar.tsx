import React, { useEffect, useMemo, useRef, useState } from 'react'
import styled, { css } from 'styled-components'

// TODO: use declaration in package
// prettier-ignore
type StringToCharArray<Str extends string> =
    string extends Str
      ? string[]
      : Str extends ''
        ? []
        : Str extends `${infer PartOne}${infer PartTwo}`
          ? [PartOne, ...StringToCharArray<PartTwo>]: [Str]

// prettier-ignore
export type Percent<Value extends number>
  = `${Value}` extends `${infer NumberToString}`
    ? NumberToString extends `-${string}`
      // If negative
      ? never
      // is Positive
      : StringToCharArray<NumberToString> extends infer Chars
        ? Chars extends { length: 1 }
          // One digit
          ? Value
          // Two digit
          : Chars extends { length: 2 }
            ? Value
            // Only 100 is allowed in Three digit numbers
            : Value extends 100 ? 100 : never
        : never
    : never

export type LineProgressBarProps<T extends number> = {
  percent: Percent<T>
  rounded?: number
  height?: number
  width?: number
  label?: (value: Percent<T>) => void
}

const useContainerWidth = (
  containerRef: React.MutableRefObject<HTMLDivElement>,
  width: number | undefined,
) => {
  const [containerWidth, setContainerWidth] = useState<number>(0)

  useEffect(() => {
    if (!containerRef.current) {
      return
    }
    if (width !== undefined) {
      setContainerWidth(width)
      return
    }
    setContainerWidth(containerRef.current.offsetWidth)
  }, [width])

  return containerWidth
}

export const LineProgressBar = <T extends number>({
  percent,
  rounded = 0,
  height = 16,
  width,
  label,
}: LineProgressBarProps<T>) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const containerWidth = useContainerWidth(containerRef, width)

  const progressWidth = useMemo(
    () => containerWidth + (containerWidth / 100) * percent,
    [containerWidth, percent],
  )

  return (
    <Container
      ref={containerRef}
      style={{
        width,
        height,
        borderRadius: rounded,
      }}
    >
      <Progress
        containerWidth={containerWidth}
        progressWidth={progressWidth}
        style={{ borderRadius: rounded }}
      />
      {label?.(percent)}
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 32px;
  background-color: #e9ecef;
  position: relative;
  overflow: hidden;
`

type ProgressProps = {
  containerWidth: number
  progressWidth: number
}
const Progress = styled.div<ProgressProps>`
  position: absolute;
  height: 100%;
  background-image: linear-gradient(
    to right,
    #12d8fa 25%,
    #43a4ff 85%,
    #3179ff 98%
  );

  ${({ containerWidth, progressWidth }) =>
    css`
      left: ${-containerWidth}px;
      width: ${progressWidth}px;
    `};
`
