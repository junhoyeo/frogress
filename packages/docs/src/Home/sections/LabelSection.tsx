import dedent from 'dedent'
import React from 'react'
import styled from 'styled-components'

import { HighlightedCode } from '../../components/HighlightedCode'
import { Heading } from '../Heading'
import { LineProgressBar } from '../LineProgressBar'
import { ProgressBarList } from '../ProgressBarList'
import { Section } from '../Section'

export const LabelSection = () => {
  return (
    <Section>
      <Heading>Label</Heading>
      <ProgressBarList>
        <LineProgressBar
          label={(value) => <Label>{`${value}%`}</Label>}
          percent={45}
          rounded={36}
          height={36}
        />
      </ProgressBarList>
      <HighlightedCode highlightLines={[1]}>
        {dedent`
          <LineProgressBar
            label={(value: number) => <CustomLabelComponent percent={value} />}
            percent={45}
            rounded={36}
            height={36}
          />
        `}
      </HighlightedCode>
    </Section>
  )
}

const Label = styled.span`
  position: absolute;
  top: 0;
  left: 18px;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: bold;
  color: white;
`
