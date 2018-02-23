import React, { Component } from 'react'
import Intro from 'LandingPage/Intro/Intro'
import About from 'LandingPage/About/About'
import Work from 'LandingPage/Work/Work'
import 'LandingPage/landing.scss'
import SectionText from 'LandingPage/SectionText'

class LandingPage extends Component {
  componentDidMount() {
    let observer
    let current = -1
    const allentries = []
    const sections = Array.from(document.getElementsByTagName('section'))

    if ('IntersectionObserver' in window) {
      document.body.classList.add('ioapi')
      observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.intersectionRatio > 0.25) {
              const newcurrent = sections.indexOf(entry.target)
              if (newcurrent === current) return
              if (current >= 0) allentries[current].exit()
              allentries[newcurrent].enter()
              current = newcurrent
            }
          })
        },
        { threshold: [0.25, 0.76] }
      )
      sections.forEach(section => allentries.push(new SectionText(section, observer)))
    }
  }

  render() {
    return [<Intro key='Intro' />, <About key='About' />, <Work key='Work' />]
  }
}

export default LandingPage
