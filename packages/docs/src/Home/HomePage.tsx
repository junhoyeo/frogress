import 'dracula-prism/dist/css/dracula-prism.css'

import dedent from 'dedent'
import prism from 'prismjs'
import React, { useEffect } from 'react'
import styled from 'styled-components'

import { HighlightedCode } from '../components/HighlightedCode'
import { Footer } from './Footer'
import { Header } from './Header'
import { Heading } from './Heading'
import { LineProgressBar } from './LineProgressBar'
import { Section } from './Section'

const roundBarPercents = [85, 62, 48, 32, 16, 8, 5, 1, 0]
export const HomePage = () => {
  useEffect(() => {
    prism.highlightAll()
  }, [])

  return (
    <Container>
      <Header />
      <Section>
        <Heading>Progress</Heading>
        <ProgressBarList>
          <LineProgressBar percent={25} />
          <LineProgressBar percent={65} />
          <LineProgressBar percent={80} />
        </ProgressBarList>
        <HighlightedCode>
          {dedent`
            import { LineProgressBar } from '@frogress/line'

            <LineProgressBar percent={25} />
            <LineProgressBar percent={65} />
            <LineProgressBar percent={80} />
          `}
        </HighlightedCode>
      </Section>
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
        <HighlightedCode>
          {dedent`
            <LineProgressBar percent={25} progressColor="#135ffb" />
            <LineProgressBar
              percent={65}
              progressColor="linear-gradient(to right, #ff655b 60%, #fd297b)"
              containerColor="#f0d4da"
            />
          `}
        </HighlightedCode>
      </Section>
      <Section>
        <Heading>Rounding</Heading>
        <ProgressBarList>
          {roundBarPercents.map((value) => (
            <LineProgressBar percent={value} rounded={36} height={36} />
          ))}
        </ProgressBarList>
        <HighlightedCode>
          {dedent`
            <LineProgressBar percent={value} rounded={36} height={36} />
          `}
        </HighlightedCode>
      </Section>
      <Section>
        <Heading>Stripes</Heading>
        <ProgressBarList>
          <LineProgressBar stripe percent={25} />
          <LineProgressBar stripe percent={65} />
        </ProgressBarList>
        <HighlightedCode>
          {dedent`
            <LineProgressBar stripe percent={25} />
          `}
        </HighlightedCode>
      </Section>
      <Section>
        <Heading>Sizing</Heading>
        <ProgressBarList>
          <LineProgressBar percent={25} width={150} />
          <LineProgressBar percent={25} width={200} />
        </ProgressBarList>
        <HighlightedCode>
          {dedent`
            <LineProgressBar percent={25} width={150} />
            <LineProgressBar percent={25} width={200} />
          `}
        </HighlightedCode>
      </Section>
      <Section>
        <Heading>Direction</Heading>
        <Paragraph>Gradient color is not changed.</Paragraph>
        <ProgressBarList>
          <LineProgressBar percent={65} direction="left" />
          <LineProgressBar percent={65} direction="right" />
        </ProgressBarList>
        <HighlightedCode>
          {dedent`
            <LineProgressBar percent={65} direction="left" />
            <LineProgressBar percent={65} direction="right" />
          `}
        </HighlightedCode>
      </Section>
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
        <HighlightedCode>
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
      <Footer />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

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

const Paragraph = styled.p``

const ProgressBarList = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  & > div.container {
    margin-top: 16px;
  }
`
