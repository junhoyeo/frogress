import dedent from 'dedent'
import React from 'react'

import { HighlightedCode } from '../../components/HighlightedCode'
import { Heading } from '../Heading'
import { LineProgressBar } from '../LineProgressBar'
import { ProgressBarList } from '../ProgressBarList'
import { Section } from '../Section'

export const StripeSection = () => {
  return (
    <Section>
      <Heading>Stripes</Heading>
      <ProgressBarList>
        <LineProgressBar stripe percent={25} />
      </ProgressBarList>
      <HighlightedCode highlightLines={[1]}>
        {dedent`
          <LineProgressBar
            stripe
            percent={25}
          />
        `}
      </HighlightedCode>
    </Section>
  )
}
