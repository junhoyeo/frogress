import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwl'
import React, { useCallback } from 'react'
import styled, { css } from 'styled-components'

type HighlightedCodeProps = {
  children: string
  highlightLines?: number[]
}

export const HighlightedCode: React.FC<HighlightedCodeProps> = ({
  children,
  highlightLines,
}) => {
  const shouldHighlightLine = useCallback(
    (index: number) => highlightLines?.includes(index),
    [],
  )

  return (
    <Container>
      <Highlight {...defaultProps} theme={theme} code={children} language="tsx">
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, lineIndex) => (
              <Line
                {...getLineProps({ line, key: lineIndex })}
                highlight={shouldHighlightLine(lineIndex)}
              >
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </Line>
            ))}
          </pre>
        )}
      </Highlight>
    </Container>
  )
}

const Container = styled.div`
  padding: 4px 0;
  border-radius: 8px;
  background-color: #021727;
  display: flex;
  margin-top: 24px;
  overflow-x: auto;

  & > pre.prism-code {
    width: 100%;
  }
`

type LineProps = {
  highlight?: boolean
}
const Line = styled.div<LineProps>`
  width: 100%;
  padding: 0 16px;

  ${({ highlight }) =>
    highlight &&
    css`
      background: #053742;
      padding-left: 12px;
      border-left: 4px solid #3edbf0;
    `};
`
