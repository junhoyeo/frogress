import React, { useState } from 'react'
import styled from 'styled-components'

import { AnimatedLineProgressBar } from '@frogress/line'

import { Heading } from '../Heading'
import { ProgressBarList } from '../ProgressBarList'
import { Section } from '../Section'

const getRandomArbitrary = (min: number, max: number): number => {
  return Math.random() * (max - min) + min
}

export const AnimationSection = () => {
  const [random, setRandom] = useState<number>(0)

  return (
    <Section>
      <Heading>Animation</Heading>
      <ProgressBarList>
        <AnimatedLineProgressBar percent={random} />
      </ProgressBarList>
      <BumpButton onClick={() => setRandom(getRandomArbitrary(0, 100))}>
        <span role="img" aria-label="man-cartwheeling">
          🤸‍♂️
        </span>{' '}
        <BumpButtonText>Bump</BumpButtonText>
      </BumpButton>
    </Section>
  )
}

const BumpButton = styled.button`
  margin-top: 16px;
  margin-right: auto;
  padding: 16px 22px;
  position: relative;

  border-radius: 8px;
  background-color: transparent;
  overflow: hidden;

  font-size: 1.05rem;
  font-weight: bold;
  text-shadow: 0 2px 4px rgba(18, 216, 250, 0.25);
  box-shadow: 0px 8px 32px rgba(0, 52, 89, 0.2);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 6px 24px rgba(0, 52, 89, 0.2);

    & > span {
      text-shadow: 0 2px 24px rgba(20, 156, 181, 0.65);
    }
  }

  &:active {
    opacity: 0.65;
  }
`
const BumpButtonText = styled.span`
  color: #1fa2ff;
  background-image: linear-gradient(to right, #1fa2ff, #12d8fa, #5ae293);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
