import React, { Component } from 'react'
import Flickity from 'flickity'
import 'ProjectPage/project.scss'

class ProjectPage extends Component {
  componentDidMount() {
    const carousel = document.querySelector('.carousel')
    // eslint-disable-next-line
    const flkty = new Flickity(carousel, {
      imagesLoaded: true,
      wrapAround: true,
      lazyLoad: true,
      autoPlay: 1500,
      adaptiveHeight: true
    })
  }

  render() {
    return (
      <div>
        <h1 className='section__text'>Intro</h1>
        <div className='carousel'>
          <div className='carousel-cell'>
            <img
              src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg'
              data-flickity-lazyload='https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg'
              alt='orange tree'
            />
          </div>
          <div className='carousel-cell'>
            <img
              src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg'
              data-flickity-lazyload='https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/one-world-trade.jpg'
              alt='One World Trade'
            />
          </div>
          <div className='carousel-cell'>
            <img
              src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg'
              data-flickity-lazyload='https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/drizzle.jpg'
              alt='drizzle'
            />
          </div>
          <div className='carousel-cell'>
            <img
              src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg'
              data-flickity-lazyload='https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/cat-nose.jpg'
              alt='cat nose'
            />
          </div>
          <div className='carousel-cell'>
            <img
              src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg'
              data-flickity-lazyload='https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/contrail.jpg'
              alt='contrail'
            />
          </div>
          <div className='carousel-cell'>
            <img
              src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg'
              data-flickity-lazyload='https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/golden-hour.jpg'
              alt='golden hour'
            />
          </div>
          <div className='carousel-cell'>
            <img
              src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg'
              data-flickity-lazyload='https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/flight-formation.jpg'
              alt='flight formation'
            />
          </div>
        </div>
        <h1>Project</h1>
      </div>
    )
  }
}

export default ProjectPage
