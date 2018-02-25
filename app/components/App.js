import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import ReactGA from 'react-ga'
import NotFound from 'NotFound/NotFound'
import Header from 'Header/Header'
import Footer from 'Footer/Footer'
import Landing from 'LandingPage/Landing'
import Project from 'ProjectPage/Project'
import ScrollToTop from 'shared/ScrollToTop/ScrollToTop'
import Test from './Test'
import './loader.scss'

const tracking = () => {
  ReactGA.pageview(window.location.pathname)
  return null
}

class App extends Component {
  previousLocation = this.props.location

  componentWillUpdate(nextProps) {
    const { location } = this.props
    if (nextProps.history.action !== 'POP' && (!location.state || !location.state.modal)) {
      this.previousLocation = this.props.location
    }
  }

  render() {
    const { location } = this.props
    const isModal = location.state && location.state.modal && this.previousLocation !== location
    return [
      <Header key='header' />,
      <main key='content'>
        <ScrollToTop>
          <Switch key='routeSwitch' location={isModal ? this.previousLocation : location}>
            <Route exact path='/' component={Landing} />
            <Route path='/projects' component={Project} />
            <Route path='/test' component={Test} />
            <Route component={NotFound} />
          </Switch>
        </ScrollToTop>
      </main>,
      <Footer key='footer' />,
      <Route key='tracking' path='/' component={tracking} />
    ]
  }
}

export default withRouter(App)
