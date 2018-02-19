import React, { Component } from 'react'
import Intro from 'Landing/Intro/Intro'
import About from 'Landing/About/About'
import Work from 'Landing/Work/Work'
import 'Landing/landing.scss'
import Entry from './Entry'

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
            if (entry.intersectionRatio > 0.5) {
              const newcurrent = sections.indexOf(entry.target)
              if (newcurrent === current) return
              if (current >= 0) {
                allentries[current].exit()
              }
              allentries[newcurrent].enter()
              current = newcurrent
            }
          })
        },
        { threshold: 0.5 }
      )

      sections.forEach(section => allentries.push(new Entry(section, observer)))
    }
  }

  render() {
    return [<Intro key='Intro' />, <About key='About' />, <Work key='Work' />]
  }
}

export default LandingPage
