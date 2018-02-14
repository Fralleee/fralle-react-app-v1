import React, { Component } from 'react'

class HexGridItem extends Component {
  render() {
    const { style, className, children } = this.props
    return (
      <li className={`hex ${className || ''}`} style={style}>
        <div>{children}</div>
      </li>
    )
  }
}

export default HexGridItem
