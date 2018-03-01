import React, { Component } from 'react'
import 'ProjectPage/project.scss'

class ProjectPage extends Component {
  render() {
    return (
      <div className='project'>
        <div className='content'>
          <h1>This project uses a specific renderer</h1>
          <p>This means it will render a specific component and is meant to be used by larger projects</p>
        </div>
      </div>
    )
  }
}

export default ProjectPage
