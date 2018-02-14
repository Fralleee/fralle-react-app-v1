import React, { Component } from 'react'
import './footer.scss'
import SocialLink from './SocialLink/SocialLink'

class Footer extends Component {
  render() {
    return (
      <footer className='footer'>
        <h2 className='footer__title'>Thanks for visiting</h2>
        <div className='footer__links'>
          <SocialLink name='github' url='https://github.com/Fralleee' />
          <SocialLink name='linkedin' url='https://www.linkedin.com/in/fralle/' />
          <SocialLink name='twitter' url='https://twitter.com/crazylegsRoland' />
        </div>
      </footer>
    )
  }
}

export default Footer
