import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from 'shared/Button/Button'
import ProjectLink from 'Work/ProjectLink/ProjectLink'
import './work.scss'

class Work extends Component {
  state = {
    activeCategory: 'game'
  }
  handleCategoryChange = e => this.setState({ activeCategory: e.currentTarget.value })
  render() {
    const { projects } = this.props.projectReducer
    const { activeCategory } = this.state
    const gameActive = activeCategory === 'game'
    const webActive = activeCategory === 'web'
    return (
      <section id='work' className='work'>
        <h1 id='workText' className='section__text'>
          Work
        </h1>
        <div className='content'>
          <h1 className='xxl'>work.</h1>
          <div className='content__categorySwitch'>
            <Button className={`btn--white ${gameActive ? 'btn--active' : ''}`} value='game' onClick={this.handleCategoryChange} style={{ width: 150 }}>
              GAME
            </Button>
            <Button className={`btn--white ${webActive ? 'btn--active' : ''}`} value='web' onClick={this.handleCategoryChange} style={{ width: 150 }}>
              WEB
            </Button>
          </div>
          <div className='content__projectList'>
            {projects
              .filter(x => x.category === activeCategory)
              .map(link => <ProjectLink key={link.title} title={link.title} category={link.category} image={link.image} uri={link.id} />)}
          </div>
        </div>
      </section>
    )
  }
}

Work.propTypes = {
  projectReducer: PropTypes.object
}

export default Work
