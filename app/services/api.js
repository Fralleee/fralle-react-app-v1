/**
 * Parent object of all APIs
 *
 * @description
 * All APIs should be available through this object
 *
 * Use following steps when creating a new API:
 * 1. Add environment-independent URL to utils/serviceLink.js
 * 2. Add resource URI-binding to utils/authConfig.js
 * 3. When constructing the API calls use the functions made in utils/apiWrapper.js
 *
 * */

import WebServer from './webserverService/webserverService'
import Invoice from './invoiceService/invoiceService'
import Auth from './authmasterService/authmasterService'
import Legal from './legalService/legalService'
import Payment from './paymentService/paymentService'

export default {
  WebServer,
  Invoice,
  Auth,
  Payment,
  Legal
}
