import React, { Component } from 'react'
import Intro from 'Landing/Intro/Intro'
import 'Landing/landing.scss'

class LandingPage extends Component {
  render() {
    return [
      <Intro key='Intro' />,
    ]
  }
}

export default LandingPage
