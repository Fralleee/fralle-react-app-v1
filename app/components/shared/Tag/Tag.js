import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Tag.scss'

class Tag extends Component {
  render() {
    const { style, className, tag } = this.props
    return (
      <li style={style} className={`tag ${className || ''} ${tag || ''}`}>
        #{tag}
      </li>
    )
  }
}

Tag.propTypes = {
  tag: PropTypes.string
}

export default Tag
