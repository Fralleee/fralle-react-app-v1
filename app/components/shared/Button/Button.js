import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Button.scss'

class Button extends Component {
  render() {
    const { style, className, children, primary, secondary } = this.props
    return (
      <button style={style} className={`btn ${className || ''} ${primary ? 'primary' : ''} ${secondary ? 'secondary' : ''}`}>
        {children}
      </button>
    )
  }
}

Button.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool
}

export default Button
