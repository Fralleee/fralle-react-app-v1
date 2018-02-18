import React, { Component } from 'react'
import ScrollIndicator from 'shared/ScrollIndicator/ScrollIndicator'
import './intro.scss'

class Intro extends Component {
  setScrollParallax = () => {
    const topDist = document.body.scrollTop || document.documentElement.scrollTop
    if (topDist / window.innerHeight < 1) {
      this.title.style.setProperty('--scrollparallax', topDist * 0.5)
      for (let i = 0; i < this.cubes.length; i++) {
        const speed = this.cubes[i].getAttribute('data-scroll') * 0.5
        this.cubes[i].style.setProperty('--scrollparallax', topDist * speed)
        this.cubes[i].style.opacity = 1 - topDist / window.innerHeight
      }
    }
    window.requestAnimationFrame(this.setScrollParallax)
  }

  componentDidMount() {
    this.title = document.getElementById('title')
    this.cubes = document.getElementsByClassName('cube')
    window.requestAnimationFrame(this.setScrollParallax)
  }

  render() {
    return (
      <section id='intro' className='intro'>
        <div className='content'>
          <div id='title' className='title'>
            <h1 className='xxxl'>fralle.</h1>
            <h3>programmer</h3>
          </div>

          <div className='parallax'>
            <div id='redCube' className='cube red' data-scroll={0.7} />
            <div id='yellowCube' className='cube yellow' data-scroll={0.25} />
            <div id='blueCube' className='cube blue' data-scroll={1} />
            <div id='tealCube' className='cube teal' data-scroll={1.25} />
            <div id='purpleCube' className='cube purple' data-scroll={0.15} />
          </div>

          <p className='skills'>JAVASCRIPT REACT REDUX WEBPACK CSS SQL AZURE C# .NET UNITY BLENDER</p>
        </div>
        {/* <ScrollIndicator /> */}
      </section>
    )
  }
}

export default Intro
