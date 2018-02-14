import React, { Component } from 'react'
import './HexGrid.scss'

class HexGridRow extends Component {
  render() {
    const { style, className, children } = this.props
    return (
      <ol className={`hexGrid--row ${className || ''}`} style={style}>
        {children}
      </ol>
    )
  }
}

export default HexGridRow
