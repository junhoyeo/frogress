import dedent from 'dedent'
import React from 'react'
import styled from 'styled-components'

import { LineProgressBar, LineProgressBarProps } from '@frogress/line'

import { HighlightedCode } from '../../components/HighlightedCode'
import { Heading } from '../Heading'
import { Paragraph } from '../Paragraph'
import { ProgressBarList } from '../ProgressBarList'
import { Section } from '../Section'

const roundBarPercents = [85, 62, 48, 32, 16, 8, 5, 1, 0]

const comparedRoundBarPercents = [48, 24, 12, 8, 4, 2]

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
      <Subtitle>Rendering Rounded Borders</Subtitle>
      <CompareContainer>
        <CompareSection>
          <CompareTitle>❌ Wrong</CompareTitle>
          <CompareMeta>Common Implementation</CompareMeta>
          <CompareProgressBarList>
            {comparedRoundBarPercents.map((value) => (
              <WrongProgressBarImplementation
                key={value}
                percent={value}
                rounded={36}
                height={24}
                progressColor="linear-gradient(to right, #78abe9, #74dad8, #ec7cac)"
              />
            ))}
          </CompareProgressBarList>
          <Paragraph>
            🔼 When the width of the process is less than the radius value, then
            the radius is decreased from the value that should be applied
            evenly.
          </Paragraph>
        </CompareSection>
        <CompareSection>
          <CompareTitle>✅ Correct</CompareTitle>
          <CompareMeta>Frogress's Implementation</CompareMeta>
          <CompareProgressBarList>
            {comparedRoundBarPercents.map((value) => (
              <LineProgressBar
                key={value}
                percent={value}
                rounded={36}
                height={24}
                progressColor="linear-gradient(to right, #78abe9, #74dad8, #ec7cac)"
              />
            ))}
          </CompareProgressBarList>
          <Paragraph>🔼 The provided radius is unified all the time.</Paragraph>
        </CompareSection>
      </CompareContainer>
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

  @media (max-width: 576px) {
    flex-direction: column;

    & > div:first-of-type {
      margin-right: 0;
    }

    & > div:not(:first-of-type) {
      margin-top: 16px;
    }
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
      borderRadius: props.rounded,
    }}
  >
    <Progress
      style={{
        width: `${props.percent}%`,
        background: props.progressColor,
        borderRadius: props.rounded,
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
