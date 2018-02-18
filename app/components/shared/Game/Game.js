import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from 'shared/Button/ButtonFlat'
import './game.scss'

class Game extends Component {
  render() {
    const { title, category } = this.props
    return (
      <div className='gameLink'>
        <h2>{title}</h2>
        <h4>{category}</h4>
        <Button className='red' style={{ width: 150 }}>
          VIEW
        </Button>
      </div>
    )
  }
}

Game.propTypes = {
  title: PropTypes.string,
  category: PropTypes.string
}

Game.defaultProps = {
  title: 'DOTR ENFOS',
  category: 'RTS / MOBA'
}

export default Game
