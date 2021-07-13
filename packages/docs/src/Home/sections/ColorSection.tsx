import dedent from 'dedent'
import React from 'react'
import styled from 'styled-components'

import { LineProgressBar, LineProgressBarProps } from '@frogress/line'

import { HighlightedCode } from '../../components/HighlightedCode'
import { Heading } from '../Heading'
import { Paragraph } from '../Paragraph'
import { ProgressBarList } from '../ProgressBarList'
import { Section } from '../Section'

const gradientBarPercents = [100, 65, 45, 15]

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
      <Subtitle>Rendering Gradients</Subtitle>
      <CompareContainer>
        <CompareSection>
          <CompareTitle>❌ Wrong</CompareTitle>
          <CompareMeta>Common Implementation</CompareMeta>
          <CompareProgressBarList>
            {gradientBarPercents.map((percent) => (
              <WrongProgressBarImplementation
                key={`wrong=${percent}`}
                percent={percent}
                progressColor="linear-gradient(to right, #78abe9, #74dad8, #ec7cac)"
              />
            ))}
          </CompareProgressBarList>
          <Paragraph>
            🔼 The gradient shrinks to the progress bar width, making it look
            weird when they're small.
          </Paragraph>
        </CompareSection>
        <CompareSection>
          <CompareTitle>✅ Correct</CompareTitle>
          <CompareMeta>Frogress's Implementation</CompareMeta>
          <CompareProgressBarList>
            {gradientBarPercents.map((percent) => (
              <LineProgressBar
                key={`wrong=${percent}`}
                percent={percent}
                progressColor="linear-gradient(to right, #78abe9, #74dad8, #ec7cac)"
              />
            ))}
          </CompareProgressBarList>
          <Paragraph>
            🔼 Gradient positions are preserved - regardless of the current
            progress state.
          </Paragraph>
        </CompareSection>
      </CompareContainer>
      <HighlightedCode highlightLines={[2, 6, 7]}>
        {dedent`
          <LineProgressBar
            percent={65}
            progressColor="linear-gradient(to right, #78abe9, #74dad8, #ec7cac)"
          />
        `}
      </HighlightedCode>
    </Section>
  )
}

const Subtitle = styled.h2`
  margin-top: 48px;
  font-size: 1.75rem;
`

const CompareContainer = styled.div`
  display: flex;
  margin-top: 16px;

  & > div:first-of-type {
    margin-right: 16px;
  }
`
const CompareSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`
const CompareTitle = styled.h3`
  margin: 0;
  margin-top: 8px;
  font-size: 1.5rem;
`
const CompareMeta = styled.p`
  margin: 0;
  margin-top: 12px;
  color: #868e96;
  font-weight: bold;
`
const CompareProgressBarList = styled(ProgressBarList)`
  margin-top: 16px;
  margin-bottom: 16px;
`

const WrongProgressBarImplementation = <T extends number>(
  props: LineProgressBarProps<T>,
) => (
  <Container
    className="container"
    style={{
      height: props.height,
      background: props.containerColor,
    }}
  >
    <Progress
      style={{
        width: `${props.percent}%`,
        background: props.progressColor,
      }}
    />
  </Container>
)
const Container = styled.div`
  width: 100%;
  height: 16px;
  background-color: #e9ecef;
  position: relative;
`
const Progress = styled.div`
  position: absolute;
  height: 100%;
  left: 0;
`
