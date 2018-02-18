import React, { Component } from 'react'
import Intro from 'Landing/Intro/Intro'
import About from 'Landing/About/About'
import Work from 'Landing/Work/Work'
import 'Landing/landing.scss'

class LandingPage extends Component {
  render() {
    return [<Intro key='Intro' />, <About key='About' />, <Work key='Work' />, <section key='space' className='space' />]
  }
}

export default LandingPage
