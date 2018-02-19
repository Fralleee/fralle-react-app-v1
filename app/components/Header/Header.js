/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */
import React, { Component } from 'react'
import './header.scss'

class Header extends Component {
  state = {
    show: false
  }

  showMenu = () => {
    this.setState({ show: !this.state.show })
  }

  render() {
    const { show } = this.state
    return (
      <header id='header' className='menu'>
        <div className='menu__logo' />
        <div role='button' tabIndex={0} className={`burger ${show ? 'active' : ''}`} onClick={this.showMenu} />
        <ul className={`nav ${show ? 'show' : ''}`}>
          <li className='nav__item active'>Home</li>
          <li className='nav__item'>About</li>
          <li className='nav__item'>Work</li>
          <li className='nav__item'>Contact</li>
        </ul>
      </header>
    )
  }
}

export default Header
