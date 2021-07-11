import Highlight, { defaultProps } from 'prism-react-renderer'
import React from 'react'

type HighlightedCodeProps = {
  children: string
}

export const HighlightedCode: React.FC<HighlightedCodeProps> = ({
  children,
}) => {
  return (
    <Highlight {...defaultProps} code={children} language="tsx">
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
  )
}
