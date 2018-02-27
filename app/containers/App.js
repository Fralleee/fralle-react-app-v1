import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import AppView from 'components/App'

function AppContainer(props) {
  return <AppView {...props} />
}

function mapStateToProps(state) {
  return {
    projectReducer: state.projectReducer
  }
}

export default withRouter(connect(mapStateToProps)(AppContainer))
