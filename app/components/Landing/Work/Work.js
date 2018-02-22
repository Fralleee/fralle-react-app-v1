import React, { Component } from 'react'
import Button from 'shared/Button/Button'
import Game from 'shared/Game/Game'
import './work.scss'

import lowpoly from '../../../public/images/renders/lowpoly.png'

// Add backgrounds for GAME and WEB categories
// Create component for game link

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
        <h1 className='content__text'>Work</h1>
        <div className='content'>
          <h1 className='xxl'>work.</h1>
          <div className='buttonContainer'>
            <Button className={`white ${gameActive ? 'active' : ''}`} value='game' onClick={this.handleCategoryChange} style={{ width: 150 }}>
              GAME
            </Button>
            <Button className={`white ${webActive ? 'active' : ''}`} value='web' onClick={this.handleCategoryChange} style={{ width: 150 }}>
              WEB
            </Button>
          </div>
          <div className='gameContainer'>
            <Game />
            <Game />
            <Game />
            <Game />
            <Game />
            <Game />
            <Game />
            <Game />
          </div>
        </div>
      </section>
    )
  }
}

export default Work
