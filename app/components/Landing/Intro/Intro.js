import React, { Component } from 'react'
import ScrollIndicator from 'shared/ScrollIndicator/ScrollIndicator'
import LogoText from 'public/images/logo/logo-text.svg'
import './intro.scss'

class Intro extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll(e) {
    window.requestAnimationFrame(() => {
      const doc = document.documentElement
      const intro = document.getElementById('intro')
      const scroll = document.getElementById('scroll')
      const title = document.getElementById('landingTitle')
      const top = doc.clientTop || 0
      const offsetTop = window.pageYOffset || doc.scrollTop
      const topDist = offsetTop - top
      const scrollView = topDist / window.innerHeight
      if (scrollView <= 1) {
        const translateY = Math.round(-topDist / 5)
        const opacity = Math.floor((1 - scrollView) * 100) / 100
        intro.style.transform = `translate3d(0, ${translateY}px, 0)`
        title.style.transform = `translate3d(0, ${translateY}px, 0)`
        intro.style.display = 'flex'
        intro.style.opacity = opacity
        scroll.style.opacity = Math.max(opacity - 0.6, 0)
      } else {
        intro.style.display = 'none'
        intro.style.opacity = 0
        scroll.style.opacity = 0
      }
    })
  }

  render() {
    return (
      <section className='intro'>
        <div id='intro' className='intro--container'>
          <img id='landingTitle' className='landingTitle' src={LogoText} alt='fralle' />
          {/* <h1 id='landingTitle' className='landingTitle'> */}
          {/* fralle
          </h1> */}
        </div>
        <section className='parallax' />
        <ScrollIndicator />
      </section>
    )
  }
}

export default Intro
