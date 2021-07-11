import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwl'
import React from 'react'
import styled from 'styled-components'

type HighlightedCodeProps = {
  children: string
}

export const HighlightedCode: React.FC<HighlightedCodeProps> = ({
  children,
}) => {
  return (
    <Container>
      <Highlight {...defaultProps} theme={theme} code={children} language="tsx">
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </Container>
  )
}

const Container = styled.div`
  padding: 4px 16px;
  border-radius: 8px;
  background-color: #021727;
  display: flex;
  margin-top: 24px;
`
