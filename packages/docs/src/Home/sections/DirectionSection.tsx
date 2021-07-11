import dedent from 'dedent'
import React from 'react'

import { LineProgressBar } from '@frogress/line'

import { HighlightedCode } from '../../components/HighlightedCode'
import { Heading } from '../Heading'
import { Paragraph } from '../Paragraph'
import { ProgressBarList } from '../ProgressBarList'
import { Section } from '../Section'

export const DirectionSection = () => {
  return (
    <Section>
      <Heading>Direction</Heading>
      <Paragraph>Gradient color is not changed.</Paragraph>
      <ProgressBarList>
        <LineProgressBar percent={65} direction="left" />
        <LineProgressBar percent={65} direction="right" />
      </ProgressBarList>
      <HighlightedCode highlightLines={[2, 6]}>
        {dedent`
          <LineProgressBar
            percent={65}
            direction="left"
          />
          <LineProgressBar
            percent={65}
            direction="right"
          />
        `}
      </HighlightedCode>
    </Section>
  )
}
