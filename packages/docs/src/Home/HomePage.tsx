import React from 'react'
import styled from 'styled-components'

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
        {roundBarPercents.map((value) => (
          <LineProgressBar percent={value} rounded={36} height={36} />
        ))}
      </ProgressList>
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
