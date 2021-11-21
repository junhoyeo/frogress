import dedent from 'dedent'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import styled, { css } from 'styled-components'

import { AnimatedLineProgressBar } from '@frogress/line'

import { HighlightedCode } from '../../components/HighlightedCode'
import { Heading } from '../Heading'
import { ProgressBarList } from '../ProgressBarList'
import { Section } from '../Section'

enum EasingFunction {
  'linear (default)' = 'linear',
  easeIn = 'easeIn',
  easeOut = 'easeOut',
  easeInOut = 'easeInOut',
  circIn = 'circIn',
  circOut = 'circOut',
  circInOut = 'circInOut',
  backIn = 'backIn',
  backOut = 'backOut',
  backInOut = 'backInOut',
  anticipate = 'anticipate',
}

const getRandomArbitrary = (min: number, max: number): number => {
  return Math.round(Math.random() * (max - min) + min)
}

export const AnimationSection = () => {
  const [random, setRandom] = useState<number>(48)
  const [easing, setEasing] = useState<EasingFunction>(
    EasingFunction['linear (default)'],
  )

  return (
    <Section>
      <Heading>Animation</Heading>
      <ProgressBarList>
        <AnimatedLineProgressBar percent={random} transition={{ easing }} />
      </ProgressBarList>
      <OptionList>
        {Object.entries(EasingFunction).map(([key, value]) => {
          const checked = easing === value
          return (
            <Option
              onClick={() => {
                setEasing(value)
                const tmp = random
                setRandom(0)
                setTimeout(() => {
                  setRandom(tmp || getRandomArbitrary(0, 100))
                }, 500)
              }}
            >
              <Radio
                checked={checked}
                animate={{
                  border: !checked ? '1px solid #9ba3a8' : '1px solid #1fd6ff',
                  background: !checked ? 'rgba(255, 255, 255, 0)' : '#1fd6ff',
                }}
              >
                {checked && <RadioInnerCircle />}
              </Radio>
              <motion.span
                animate={{ color: !checked ? '#9ba3a8' : '#1fa2ff' }}
              >
                {key}
              </motion.span>
            </Option>
          )
        })}
      </OptionList>
      <HighlightedCode highlightLines={[2]}>
        {dedent`
          import { AnimatedLineProgressBar } from '@frogress/line'

          <AnimatedLineProgressBar
            percent={${random}}
            transition={{ easing: '${easing}' }}
          />
        `}
      </HighlightedCode>
      <BumpButton onClick={() => setRandom(getRandomArbitrary(0, 100))}>
        <span role="img" aria-label="man-cartwheeling">
          🤸‍♂️
        </span>{' '}
        <BumpButtonText>Bump</BumpButtonText>
      </BumpButton>
    </Section>
  )
}

const OptionList = styled.ul`
  margin: 0;
  margin-top: 24px;
  padding: 0;

  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`
const Option = styled.li`
  margin-right: 16px;
  margin-bottom: 12px;

  display: flex;
  align-items: center;
  user-select: none;
  cursor: pointer;

  & > span {
    margin-left: 6px;
  }
`
type RadioProps = {
  checked?: boolean
}
const Radio = styled(motion.div)<RadioProps>`
  width: 24px;
  height: 24px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
`
const RadioInnerCircle = styled(motion.div).attrs({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
})`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: white;
  box-shadow: 0 2px 12px rgba(20, 31, 181, 0.85);
`

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
