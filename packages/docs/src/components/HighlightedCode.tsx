import React from 'react'
import styled from 'styled-components'

export const HighlightedCode: React.FC = ({ children }) => {
  return (
    <div>
      <HighlightedCodePre>
        <code className="language-tsx">{children}</code>
      </HighlightedCodePre>
    </div>
  )
}

const HighlightedCodePre = styled.pre`
  && {
    margin: 0;
    margin-top: 16px;
  }
`
