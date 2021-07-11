import React from 'react'
import styled from 'styled-components'

import { copyToClipboard } from './utils/clipboard'

export const Header = () => {
  const onClickCopyInstallCommand = () => {
    const installCommand = 'yarn add @frogress/line'
    copyToClipboard(installCommand)
  }

  return (
    <Container>
      <Title>
        <TitleSegment>The ultimate</TitleSegment>
        <TitleSegment>
          line <TitleHighlight>progress</TitleHighlight> bar
        </TitleSegment>
        <TitleSegment>UI for React</TitleSegment>
      </Title>
      <InstallCommandContainer onClick={onClickCopyInstallCommand}>
        <InstallCommand>$ yarn add @frogress/line</InstallCommand>
      </InstallCommandContainer>
      <Button>View on GitHub</Button>
    </Container>
  )
}

const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.h1`
  margin: 0;
  margin-top: 64px;
  font-weight: 900;
  font-size: 3.8em;
  text-align: center;
  line-height: 1.25;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const TitleSegment = styled.span`
  &:first-of-type {
    margin-bottom: -8px;
  }
`
const TitleHighlight = styled.span`
  background: linear-gradient(to right, #1fa2ff, #12d8fa, #5ae293);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 2px 8px rgba(18, 216, 250, 0.65);
`

const Button = styled.button`
  margin-top: 32px;
  padding: 24px 36px;
  border-radius: 36px;
  font-size: 1.05rem;
  background-image: linear-gradient(to right, #1fa2ff, #12d8fa, #a6ffcb);
  font-weight: bold;
  color: rgba(255, 255, 255, 0.95);
  text-shadow: 0 2px 4px rgba(18, 216, 250, 0.85);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
    text-shadow: 0 2px 24px rgba(20, 156, 181, 0.85);
  }
`

const InstallCommandContainer = styled.div`
  margin-top: 16px;
  display: flex;
  background-image: linear-gradient(to right, #1fa2ff, #12d8fa, #5ae293);
  border-radius: 10px;
  padding: 2px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`
const InstallCommand = styled.span`
  padding: 0 4px;
  color: #343a40;
  padding: 18px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(12px);
  font-weight: bold;
  font-family: Consolas, Monaco, andale mono, monospace;
`
