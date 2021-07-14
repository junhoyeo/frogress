import dedent from 'dedent'
import React, { useMemo, useRef } from 'react'
import styled, { css } from 'styled-components'

import { Percent } from './Percent'
import { useContainerWidth } from './useContainerWidth'

export type LineProgressBarProps<T extends number> = {
  percent: Percent<T>
  rounded?: number
  stripe?: boolean
  height?: number
  width?: number
  direction?: 'left' | 'right'
  className?: string
  progressColor?: string
  containerColor?: string
  progressStyle?: React.CSSProperties
  containerStyle?: React.CSSProperties
  label?: (value: Percent<T>) => React.ReactNode
}

export const LineProgressBar = <T extends number>({
  percent,
  rounded,
  stripe,
  height,
  width,
  direction = 'left',
  className,
  progressColor,
  containerColor,
  progressStyle,
  containerStyle,
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
      className={`container ${className}`}
      ref={containerRef}
      style={{
        width,
        height,
        borderRadius: rounded,
        background: containerColor,
        ...containerStyle,
      }}
    >
      <Progress
        className="progress"
        containerWidth={containerWidth}
        direction={direction}
        offset={progressOffset}
        style={{
          borderRadius: rounded,
          background: progressColor,
          ...progressStyle,
        }}
      >
        {stripe && <Stripe />}
      </Progress>
      {label?.(percent)}
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 16px;
  border-radius: 0;
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
      width: ${containerWidth === 0 ? '100%' : `${containerWidth}px`};
      ${direction}: ${offset}px;
    `};
`

const Stripe = React.memo(() => (
  <div
    style={{
      backgroundImage: dedent`
        linear-gradient(
        45deg,
        rgba(255, 255, 255, 0.15) 25%,
        transparent 25%,
        transparent 50%,
        rgba(255, 255, 255, 0.15) 50%,
        rgba(255, 255, 255, 0.15) 75%,
        transparent 75%,
        transparent
      )`,
      backgroundSize: '1.5rem 1.5rem',
      width: '100%',
      height: '100%',
    }}
  />
))
