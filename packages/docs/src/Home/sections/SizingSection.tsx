import dedent from 'dedent'
import React from 'react'

import { HighlightedCode } from '../../components/HighlightedCode'
import { Heading } from '../Heading'
import { LineProgressBar } from '../LineProgressBar'
import { ProgressBarList } from '../ProgressBarList'
import { Section } from '../Section'

export const SizingSection = () => {
  return (
    <Section>
      <Heading>Sizing</Heading>
      <ProgressBarList>
        <LineProgressBar percent={25} width={150} />
        <LineProgressBar percent={25} width={200} />
        <LineProgressBar percent={25} width={400} height={24} />
      </ProgressBarList>
      <HighlightedCode highlightLines={[4, 5]}>
        {dedent`
          <LineProgressBar percent={25} width={150} />
          <LineProgressBar percent={25} width={200} />
          <LineProgressBar
            percent={25}
            width={400}
            height={24}
          />
        `}
      </HighlightedCode>
    </Section>
  )
}
