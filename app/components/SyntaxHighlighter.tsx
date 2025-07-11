'use client'

import { Prism as SyntaxHighlighterLib } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

export default function SyntaxHighlighter({ language = 'javascript', children }) {
  return (
    <SyntaxHighlighterLib
      language={language}
      style={atomDark}
      customStyle={{
        backgroundColor: '#1E1E1E',
        borderRadius: '0.5rem',
        padding: '1rem',
        margin: '0',
      }}
      showLineNumbers={true}
      lineNumberStyle={{
        color: '#6e7681',
        marginRight: '1rem',
      }}
    >
      {children}
    </SyntaxHighlighterLib>
  )
}