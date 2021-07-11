import dedent from 'dedent'
import React from 'react'

import { LineProgressBar } from '@frogress/line'

import { HighlightedCode } from '../../components/HighlightedCode'
import { Heading } from '../Heading'
import { ProgressBarList } from '../ProgressBarList'
import { Section } from '../Section'

export const ProgressSection = () => {
  return (
    <Section>
      <Heading>Progress</Heading>
      <ProgressBarList>
        <LineProgressBar percent={25} />
        <LineProgressBar percent={65} />
        <LineProgressBar percent={80} />
      </ProgressBarList>
      <HighlightedCode highlightLines={[2]}>
        {dedent`
          import { LineProgressBar } from '@frogress/line'

          <LineProgressBar percent={25} />
          <LineProgressBar percent={65} />
          <LineProgressBar percent={80} />
        `}
      </HighlightedCode>
    </Section>
  )
}
