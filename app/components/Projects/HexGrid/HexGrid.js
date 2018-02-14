import React, { Component } from 'react'
import './HexGrid.scss'

class HexGrid extends Component {
  render() {
    const { style, className, children } = this.props
    return (
      <div className={`hexGrid ${className || ''}`} style={style}>
        {children}
      </div>
    )
  }
}

export default HexGrid
