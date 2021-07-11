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
  stripe?: boolean
  height?: number
  width?: number
  direction?: 'left' | 'right'
  progressColor?: string
  containerColor?: string
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
  stripe,
  height = 16,
  width,
  direction = 'left',
  progressColor,
  containerColor,
  label,
}: LineProgressBarProps<T>) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const containerWidth = useContainerWidth(containerRef, width)

  const progressOffset = useMemo(
    () => -(containerWidth / 100) * (100 - percent),
    [containerWidth, percent],
  )

  return (
    <Container
      className="container"
      ref={containerRef}
      style={{
        width,
        height,
        borderRadius: rounded,
        background: containerColor,
      }}
    >
      <Progress
        className="progress"
        containerWidth={containerWidth}
        direction={direction}
        offset={progressOffset}
        style={{ borderRadius: rounded, background: progressColor }}
      >
        {stripe && <Stripe />}
      </Progress>
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
  direction?: 'left' | 'right'
  offset: number
}
const Progress = styled.div<ProgressProps>`
  position: absolute;
  height: 100%;

  ${({ containerWidth, direction, offset }) =>
    css`
      background-image: linear-gradient(
        to ${direction === 'left' ? 'right' : 'left'},
        #12d8fa 25%,
        #43a4ff 85%,
        #3179ff 98%
      );
      width: ${containerWidth}px;
      ${direction}: ${offset}px;
    `};
`

const Stripe = styled.div`
  background-image: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
  background-size: 1.5rem 1.5rem;
  width: 100%;
  height: 100%;
`
