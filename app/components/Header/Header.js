/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */
import React, { Component } from 'react'
import GetOffset from 'utils/getOffset'
import ScrollTo from 'utils/smoothScroll'
import './header.scss'

class Header extends Component {
  state = {
    show: false
  }

  showMenu = () => {
    this.setState({ show: !this.state.show })
  }

  handleClick = e => {
    const el = document.getElementById(e.currentTarget.value)
    const topY = GetOffset(el).top
    ScrollTo(topY, 50)
  }

  render() {
    const { show } = this.state
    return (
      <header id='header' className='menu'>
        <div className='menu__logo' />
        <div role='button' tabIndex={0} className={`menu__burger ${show ? 'active' : ''}`} onClick={this.showMenu} />
        <div className={`nav ${show ? 'show' : ''}`}>
          <button id='btnIntro' value='intro' className='nav__item' onClick={this.handleClick}>
            Home
          </button>
          <button id='btnAbout' value='about' className='nav__item' onClick={this.handleClick}>
            About
          </button>
          <button id='btnWork' value='work' className='nav__item' onClick={this.handleClick}>
            Work
          </button>
        </div>
      </header>
    )
  }
}

export default Header
