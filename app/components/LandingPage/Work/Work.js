import React, { Component } from 'react'
import Button from 'shared/Button/Button'
import ProjectLink from 'Work/ProjectLink/ProjectLink'
import './work.scss'

const games = [
  { title: 'DOTR ENFOS', category: 'RTS / MOBA', image: 'https://placeimg.com/480/768/any' },
  { title: 'SHUFFLEPUCK LOUNGE', category: 'ARCADE / RETRO', image: 'https://placeimg.com/480/769/any' },
  { title: 'ROLLELOCKS', category: 'ARENA / PVP', image: 'https://placeimg.com/478/768/any' },
  { title: 'ONI TAG', category: 'MULTIPLAYER / FUN / TAG', image: 'https://placeimg.com/479/768/any' },
  { title: 'TUBRO ROCKETS', category: 'ARCADE / PVP', image: 'https://placeimg.com/482/768/any' },
  { title: 'PONG 3D', category: 'ARCADE / RETRO', image: 'https://placeimg.com/481/768/any' },
  { title: 'UNFINISHED', category: 'ADVENTURE', image: 'https://placeimg.com/482/768/any' },
  { title: 'TBD', category: 'N/A', image: 'https://placeimg.com/483/768/any' }
]

const webApps = [
  { title: 'RMDB', category: 'MOVIE / FAN', image: 'https://placeimg.com/480/768/any' },
  { title: 'FODERTORGET', category: 'SHOP / AUCTION', image: 'https://placeimg.com/480/768/any' }
]

class Work extends Component {
  state = {
    activeCategory: 'game'
  }
  handleCategoryChange = e => this.setState({ activeCategory: e.currentTarget.value })
  render() {
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
            {gameActive && games.map(projectLink => <ProjectLink key={projectLink.title} title={projectLink.title} category={projectLink.category} image={projectLink.image} />)}
            {webActive && webApps.map(projectLink => <ProjectLink key={projectLink.title} title={projectLink.title} category={projectLink.category} image={projectLink.image} />)}
          </div>
        </div>
      </section>
    )
  }
}

export default Work
