import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './projectLink.scss'

class ProjectLink extends Component {
  render() {
    const { uri, title, category, image } = this.props
    const renderUri = uri || title.replace(/\s/g, '-').toLowerCase()
    return (
      <Link to={`/projects/${renderUri}`} className='projectLink'>
        <img className='projectLink__image' src={image} alt='project screenshot' />
        <h3>{title}</h3>
        <h4>{category}</h4>
      </Link>
    )
  }
}

ProjectLink.propTypes = {
  uri: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
  image: PropTypes.string
}

ProjectLink.defaultProps = {
  title: 'DOTR ENFOS',
  category: 'RTS / MOBA',
  image: 'https://placeimg.com/640/480/any'
}

export default ProjectLink
