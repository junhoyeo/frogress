import dedent from 'dedent'
import React from 'react'

import { LineProgressBar } from '@frogress/line'

import { HighlightedCode } from '../../components/HighlightedCode'
import { Heading } from '../Heading'
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
