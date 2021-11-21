import dedent from 'dedent'
import { HTMLMotionProps, motion } from 'framer-motion'
import React, { useMemo, useRef } from 'react'
import styled, { css } from 'styled-components'

import { LineProgressBarProps } from './LineProgressBar'
import { useContainerWidth } from './useContainerWidth'

export type AnimatedLineProgressBarProps<T extends number> =
  LineProgressBarProps<T> & HTMLMotionProps<'div'>

export const AnimatedLineProgressBar = <T extends number>({
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
  ...props
}: AnimatedLineProgressBarProps<T>) => {
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
        animate={{
          [direction]: progressOffset,
        }}
        containerWidth={containerWidth}
        direction={direction}
        style={{
          borderRadius: rounded,
          background: progressColor,
          ...progressStyle,
        }}
        transition={{ ease: 'linear' }}
        {...props}
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
}
const Progress = styled(motion.div)<ProgressProps>`
  position: absolute;
  height: 100%;

  ${({ containerWidth, direction }) =>
    css`
      width: ${containerWidth === 0 ? '100%' : `${containerWidth}px`};
      background-image: linear-gradient(
        to ${direction === 'left' ? 'right' : 'left'},
        #12d8fa 25%,
        #43a4ff 85%,
        #3179ff 98%
      );
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
