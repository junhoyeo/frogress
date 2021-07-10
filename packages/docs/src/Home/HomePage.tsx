import React from 'react'
import styled from 'styled-components'

import { Header } from './Header'
import { LineProgressBar } from './LineProgressBar'

export const HomePage = () => {
  return (
    <Container>
      <Header />
      <ProgressList>
        <LineProgressBar percent={25} />
        <LineProgressBar percent={65} />
        <LineProgressBar percent={80} />
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
