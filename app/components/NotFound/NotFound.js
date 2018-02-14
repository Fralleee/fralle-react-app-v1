import React, { Component } from 'react'

class PageNotFound extends Component {
  render() {
    return (
      <div id='PageNotFound'>
        <div>
          <h3 className='heading'>Oops! Not found!</h3>
          <p>Apologies, but we were unable to find the page you requested. Please try again...</p>
        </div>
      </div>
    )
  }
}

export default PageNotFound
