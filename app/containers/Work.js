import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import WorkView from 'components/LandingPage/Work/Work'

function WorkContainer(props) {
  return <WorkView {...props} />
}

function mapStateToProps(state) {
  return {
    projectReducer: state.projectReducer
  }
}

export default withRouter(connect(mapStateToProps)(WorkContainer))
