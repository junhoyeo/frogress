import React from 'react'
import styled from 'styled-components'

import { Footer } from './Footer'
import { Header } from './Header'
import { LineProgressBar } from './LineProgressBar'

const roundBarPercents = [85, 62, 48, 32, 16, 8, 5, 1, 0]

export const HomePage = () => {
  return (
    <Container>
      <Header />
      <ProgressList>
        <LineProgressBar percent={25} />
        <LineProgressBar percent={65} />
        <LineProgressBar percent={80} />
      </ProgressList>
      <ProgressList>
        <LineProgressBar percent={25} width={150} />
        <LineProgressBar percent={25} width={200} />
      </ProgressList>
      <ProgressList>
        <LineProgressBar stripe percent={25} />
        <LineProgressBar stripe percent={65} />
      </ProgressList>
      <ProgressList>
        {roundBarPercents.map((value) => (
          <LineProgressBar percent={value} rounded={36} height={36} />
        ))}
      </ProgressList>
      <ProgressList>
        <LineProgressBar
          label={(value) => <Label>{`${value}%`}</Label>}
          percent={45}
          rounded={36}
          height={36}
        />
      </ProgressList>
      <Footer />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ProgressList = styled.div`
  margin-top: 48px;
  width: 500px;
  display: flex;
  flex-direction: column;

  & > div {
    margin-top: 16px;
  }
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
