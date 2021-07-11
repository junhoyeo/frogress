import React from 'react'
import styled from 'styled-components'

import { Footer } from './Footer'
import { Header } from './Header'
import { Heading } from './Heading'
import { LineProgressBar } from './LineProgressBar'
import { Section } from './Section'

const roundBarPercents = [85, 62, 48, 32, 16, 8, 5, 1, 0]

export const HomePage = () => {
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
      </Section>
      <Section>
        <Heading>Sizing</Heading>
        <ProgressBarList>
          <LineProgressBar percent={25} width={150} />
          <LineProgressBar percent={25} width={200} />
        </ProgressBarList>
      </Section>
      <Section>
        <Heading>Stripes</Heading>
        <ProgressBarList>
          <LineProgressBar stripe percent={25} />
          <LineProgressBar stripe percent={65} />
        </ProgressBarList>
      </Section>
      <Section>
        <Heading>Rounding</Heading>
        <ProgressBarList>
          {roundBarPercents.map((value) => (
            <LineProgressBar percent={value} rounded={36} height={36} />
          ))}
        </ProgressBarList>
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

const ProgressBarList = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  & > div.container {
    margin-top: 16px;
  }
`
