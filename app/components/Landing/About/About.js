import React, { Component } from 'react'
import './about.scss'

import Fluff from '../../../public/images/renders/fluff.png'

class About extends Component {
  render() {
    return (
      <section className='about'>
        <div className='content'>
          <div className='left'>
            <img className='sideImage' src={Fluff} alt='fluffy ball' />
          </div>
          <div className='right'>
            <h1 className='xxl'>about.</h1>
            <p>
              Sed ut perspiciatis unde omnisiste natus error sit voluptatem accusantium do loremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
              quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur Sed ut perspiciatis unde omnisiste natus error sit
              voluptatem accusantium do loremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur
            </p>
            <div className='emo-square' />
          </div>
        </div>
      </section>
    )
  }
}

export default About
