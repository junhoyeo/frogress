import React from 'react'
import styled from 'styled-components'

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
}

export const LineProgressBar = <T extends number>({
  percent,
  rounded = 0,
  height = 16,
}: LineProgressBarProps<T>) => {
  return (
    <Container style={{ height, borderRadius: rounded }}>
      <Progress percent={percent} style={{ borderRadius: rounded }} />
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
  percent: number
}
const Progress = styled.div<ProgressProps>`
  position: absolute;
  height: 100%;
  width: calc(${({ percent }) => percent}% + 500px);
  left: -500px;
  background-image: linear-gradient(
    to right,
    #12d8fa 25%,
    #43a4ff 85%,
    #3179ff 98%
  );
`
