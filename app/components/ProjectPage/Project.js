import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import CodeRenderer from './CodeRenderer'

const input = '# This is a header\n\nAnd this is a paragraph'
const code = `
 \`\`\`js
  const num = Number.Parse(x)
 \`\`\`
`
class ProjectPage extends Component {
  render() {
    return (
      <div className='project'>
        <div className='content'>
          <h1>This is the default renderer</h1>
          <p>This is meant to be used to render github readme.md markdown</p>
          <ReactMarkdown source={input} escapeHtml renderers={{ code: CodeRenderer }} />
          <ReactMarkdown source={code} escapeHtml renderers={{ code: CodeRenderer }} />
        </div>
      </div>
    )
  }
}

export default ProjectPage
