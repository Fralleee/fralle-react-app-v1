import React, { Component } from 'react'
import Intro from 'Landing/Intro/Intro'
import Presentation from 'Landing/Presentation/Presentation'
import PresentationContinued from 'Landing/PresentationContinued/PresentationContinued'
import Recent from 'Landing/Recent/Recent'
import 'Landing/landing.scss'

class LandingPage extends Component {
  render() {
    return [
      <Intro key='Intro' />,
      <Presentation key='Presentation' />,
      <Recent key='Recent' />,
      <PresentationContinued key='PresentationContinued' />
    ]
  }
}

export default LandingPage
