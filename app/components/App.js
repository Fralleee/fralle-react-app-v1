import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, withRouter } from 'react-router-dom'
import ReactGA from 'react-ga'
import NotFound from 'NotFound/NotFound'
import Header from 'Header/Header'
import Footer from 'Footer/Footer'
import Landing from 'LandingPage/Landing'
import Project from 'ProjectPage/Project'
import ProjectMeta from 'ProjectPage/ProjectMeta'
import ScrollToTop from 'shared/ScrollToTop/ScrollToTop'
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
    const { projects } = this.props.projectReducer
    const isModal = location.state && location.state.modal && this.previousLocation !== location

    const projectsWithRenderer = projects.filter(x => x.renderer)
    const path = location.pathname
    const project = path.length > 1 ? projects.find(x => x.id === path.substring(1, path.length)) : null

    return [
      <Header key='header' />,
      <main key='content'>
        <ScrollToTop>
          <Route path='/:projectName' render={() => <ProjectMeta project={project} />} />
          <Switch key='routeSwitch' location={isModal ? this.previousLocation : location}>
            <Route exact path='/' component={Landing} />
            {projectsWithRenderer.map(p => <Route key={p.id} path={`/${p.id}`} render={() => <p.renderer project={project} />} />)}
            <Route path='/:projectName' render={() => <Project project={project} />} />
            <Route component={NotFound} />
          </Switch>
        </ScrollToTop>
      </main>,
      <Footer key='footer' />,
      <Route key='tracking' path='/' component={tracking} />
    ]
  }
}

App.propTypes = {
  projectReducer: PropTypes.object
}

export default withRouter(App)
