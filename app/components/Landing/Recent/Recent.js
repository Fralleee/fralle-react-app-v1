import React, { Component } from 'react'
import './recent.scss'

class Recent extends Component {
  render() {
    return (
      <section className='recent'>
        <h1>Recent work</h1>
        <div className='recent__container'>
          <ul className='recent__list'>
            <li className='recent__project'>
              <a href='http://fralle.com'>
                <h1>a</h1>
              </a>
            </li>
            <li className='recent__project'>
              <a href='http://fralle.com'>
                <h1>a</h1>
              </a>
            </li>
            <li className='recent__project'>
              <a href='http://fralle.com'>
                <h1>a</h1>
              </a>
            </li>
            <li className='recent__project'>
              <a href='http://fralle.com'>
                <h1>a</h1>
              </a>
            </li>
            <li className='recent__project'>
              <a href='http://fralle.com'>
                <h1>a</h1>
              </a>
            </li>
          </ul>
        </div>
      </section>
    )
  }
}

export default Recent
