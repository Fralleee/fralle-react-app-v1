import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Button from 'shared/Button/ButtonFlat'
import './project.scss'

class Project extends Component {
  render() {
    const { title, category, image } = this.props
    return (
      <div className='projectLink'>
        <img className='project__image' src={image} alt='project screenshot' />
        <h3>{title}</h3>
        <h4>{category}</h4>
        <Link to='/projects'>
          <Button className='red' style={{ width: 150 }}>
            VIEW
          </Button>
        </Link>
      </div>
    )
  }
}

Project.propTypes = {
  title: PropTypes.string,
  category: PropTypes.string,
  image: PropTypes.string
}

Project.defaultProps = {
  title: 'DOTR ENFOS',
  category: 'RTS / MOBA',
  image: 'https://placeimg.com/640/480/any'
}

export default Project
