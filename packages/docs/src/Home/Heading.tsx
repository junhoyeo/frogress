import React from 'react'
import styled from 'styled-components'

export const Heading: React.FC = ({ children }) => {
  return (
    <Container>
      <Title>{children}</Title>
    </Container>
  )
}

const Container = styled.div``

const Title = styled.h1``
