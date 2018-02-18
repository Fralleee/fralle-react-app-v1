import React, { Component } from 'react'
import './ButtonFlat.scss'

class ButtonFlat extends Component {
  render() {
    const { className, children } = this.props
    return (
      <button {...this.props} className={`btnflat ${className || ''}`}>
        {children}
      </button>
    )
  }
}

export default ButtonFlat
