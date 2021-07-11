import dedent from 'dedent'
import React from 'react'

import { LineProgressBar } from '@frogress/line'

import { HighlightedCode } from '../../components/HighlightedCode'
import { Heading } from '../Heading'
import { ProgressBarList } from '../ProgressBarList'
import { Section } from '../Section'

const roundBarPercents = [85, 62, 48, 32, 16, 8, 5, 1, 0]

export const RoundingSection = () => {
  return (
    <Section>
      <Heading>Rounding</Heading>
      <ProgressBarList>
        {roundBarPercents.map((value) => (
          <LineProgressBar
            key={value}
            percent={value}
            rounded={36}
            height={36}
          />
        ))}
      </ProgressBarList>
      <HighlightedCode highlightLines={[2]}>
        {dedent`
          <LineProgressBar
            percent={value}
            rounded={36}
            height={36}
          />
        `}
      </HighlightedCode>
    </Section>
  )
}
