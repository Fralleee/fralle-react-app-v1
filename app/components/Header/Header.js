/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */
import React, { Component } from 'react'
import './header.scss'

const LogoIcon = () => (
  <svg width='24px' height='24px' version='1.1' viewBox='0 0 11.95322 11.950939' xmlns='http://www.w3.org/2000/svg'>
    <g fill='#e1e1e1'>
      <circle cx='.84421' cy='11.107' r='1' />
      <circle cx='5.9766' cy='11.107' r='1' />
      <circle cx='11.109' cy='11.107' r='1' />
      <circle cx='11.109' cy='5.9755' r='1' />
      <circle cx='11.109' cy='.84418' r='1' />
      <circle cx='5.9766' cy='.84418' r='1' />
      <circle cx='.84421' cy='.84418' r='1' />
      <circle cx='.84421' cy='5.9755' r='1' />
      <circle cx='5.9766' cy='5.9755' r='1' />
    </g>
  </svg>
)

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
        ¨
        <div className='menu__logo'>
          <LogoIcon />
        </div>
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
