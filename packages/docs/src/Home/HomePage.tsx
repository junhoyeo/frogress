import React from 'react'
import styled from 'styled-components'

import { Header } from './Header'

export const HomePage = () => {
  return (
    <Container>
      <Header />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
