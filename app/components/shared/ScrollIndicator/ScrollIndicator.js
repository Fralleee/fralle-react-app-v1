import React, { Component } from 'react'
import './scrollIndicator.scss'

class ScrollIndicator extends Component {
  render() {
    const { style } = this.props
    return (
      <div id='scroll' className='scroll' style={style}>
        <a href='#recent-projects'>
          <div className='mouse-icon'>
            <span className='mouse-wheel' />
          </div>
        </a>
      </div>
    )
  }
}

export default ScrollIndicator
