import React, { Component } from 'react'
import Button from 'shared/Button/Button'
import './projects.scss'

class ProjectsPage extends Component {
  render() {
    return (
      <div className='projectsPage'>
        <h1 size='lg'>Roland Chelwing</h1>
        <h1 size='xl'>Programmer</h1>
        <h1 size='md'>web | sys | game</h1>
        <Button style={{ textAlign: 'center', maxWidth: 280, margin: '4rem auto' }}>Browse projects</Button>
      </div>
    )
  }
}

export default ProjectsPage
