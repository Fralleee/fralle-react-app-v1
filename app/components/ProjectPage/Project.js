import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import CodeRenderer from './CodeRenderer'

const input = '# This is a header\n\nAnd this is a paragraph'
const code = `
 \`\`\`js
  var bajs = Number.Parse(x)
 \`\`\`
`
class ProjectPage extends Component {
  render() {
    return (
      <div className='project--body'>
        <h1>Nothing here</h1>
        <ReactMarkdown source={input} escapeHtml renderers={{ code: CodeRenderer }} />
        <ReactMarkdown source={code} escapeHtml renderers={{ code: CodeRenderer }} />
      </div>
    )
  }
}

export default ProjectPage
