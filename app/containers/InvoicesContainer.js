import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getInvoicesSinceDate } from 'store/actions/invoiceActions'
import InvoicesView from 'components/invoice/InvoicesView'

function InvoicesContainer(props) {
  return <InvoicesView {...props} />
}

function mapStateToProps(state) {
  return {
    invoiceReducer: state.invoiceReducer
  }
}

const mapDispatcherToProps = dispatch => ({
  actions: bindActionCreators({ getInvoicesSinceDate }, dispatch)
})

export default connect(mapStateToProps, mapDispatcherToProps)(InvoicesContainer)
