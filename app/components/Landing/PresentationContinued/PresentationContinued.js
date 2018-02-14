import React, { Component } from 'react'
import Skill from 'Landing/Skill/Skill'
import './presentation.scss'

class PresentationContinued extends Component {
  render() {
    return (
      <section className='presentation continued'>
        <ul>
          <Skill code='csharp' />
          <Skill code='sql' />
          <Skill code='net' />
          <Skill code='azure' />
          <Skill code='unity' />
          <Skill code='blender' />

          <Skill code='javascript' />
          <Skill code='css' />
          <Skill code='node' />
          <Skill code='react' />
          <Skill code='redux' />
          <Skill code='webpack' />
        </ul>
      </section>
    )
  }
}

export default PresentationContinued
