import React from 'react'
import styled from 'styled-components'

export const Footer = () => {
  return (
    <Container>
      <GitHubLink href="https://github.com/junhoyeo" target="_blank">
        Made by <CreatorName>@junhoyeo</CreatorName>
      </GitHubLink>
    </Container>
  )
}

const Container = styled.footer`
  height: 180px;
  padding-top: 72px;
  display: flex;
  flex-direction: column;
`

const GitHubLink = styled.a`
  font-weight: bold;
  color: #002859;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.05);

    & > span {
      text-shadow: 0 2px 8px rgba(18, 216, 250, 0.65);
    }
  }
`

const CreatorName = styled.span`
  background: linear-gradient(to right, #1fa2ff, #12d8fa, #5ae293);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 2px 16px rgba(18, 216, 250, 0.65);
  transition: all 0.2s ease;
`
