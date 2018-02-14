import React, { Component } from 'react'
import Slider from 'react-slick'
import Title from 'atoms/Title/Title'
import RecentProjectItem from './RecentProjectItem'
import './RecentProjects.scss'
import './Slick.scss'

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: false,
  dotsClass: 'slider--dots'
}

class LandingPage extends Component {
  render() {
    return (
      <section className='recentProjects' id='recent-projects'>
        <div className='container'>
          <Title>Recent invoices</Title>
          <Slider {...sliderSettings}>
            <RecentProjectItem name='Pong Sulan Edition' img='https://placekitten.com/g/800/600' type='GAME' />
            <RecentProjectItem name='Karate Kent' img='https://placekitten.com/g/600/600' type='GAME' />
            <RecentProjectItem name='Karate Kent' img='https://placekitten.com/g/1000/600' type='GAME' />
          </Slider>
        </div>
      </section>
    )
  }
}

export default LandingPage
