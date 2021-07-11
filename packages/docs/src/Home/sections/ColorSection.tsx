import dedent from 'dedent'
import React from 'react'

import { HighlightedCode } from '../../components/HighlightedCode'
import { Heading } from '../Heading'
import { LineProgressBar } from '../LineProgressBar'
import { ProgressBarList } from '../ProgressBarList'
import { Section } from '../Section'

export const ColorSection = () => {
  return (
    <Section>
      <Heading>Color</Heading>
      <ProgressBarList>
        <LineProgressBar percent={25} progressColor="#135ffb" />
        <LineProgressBar
          percent={65}
          progressColor="linear-gradient(to right, #ff655b, #fd297b)"
          containerColor="#f0d4da"
        />
      </ProgressBarList>
      <HighlightedCode highlightLines={[2, 6, 7]}>
        {dedent`
          <LineProgressBar
            percent={25}
            progressColor="#135ffb"
          />
          <LineProgressBar
            percent={65}
            progressColor="linear-gradient(to right, #ff655b 60%, #fd297b)"
            containerColor="#f0d4da"
          />
        `}
      </HighlightedCode>
    </Section>
  )
}
