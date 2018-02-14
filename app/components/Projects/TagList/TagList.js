import React, { Component } from 'react'
import Tag from 'atoms/Tag/Tag'
import './TagList.scss'

class TagList extends Component {
  render() {
    const { style, className, children } = this.props
    return (
      <ul style={style} className={`tagList ${className || ''}`}>
        {children}
        {children.length === 0 && [
          <Tag key='react' tag='react' />,
          <Tag key='azure' tag='azure' />,
          <Tag key='node' tag='node' />,
          <Tag key='sql' tag='sql' />,
          <Tag key='net' tag='net' />,
          <Tag key='vscode' tag='vscode' />,
          <Tag key='javascript' tag='javascript' />,
          <Tag key='csharp' tag='csharp' />,
          <Tag key='vs' tag='vs' />,
          <Tag key='redux' tag='redux' />,
          <Tag key='css' tag='css' />,
          <Tag key='unity' tag='unity' />,
          <Tag key='webpack' tag='webpack' />,
          <Tag key='blender' tag='blender' />
        ]}
      </ul>
    )
  }
}

TagList.propTypes = {}

export default TagList
