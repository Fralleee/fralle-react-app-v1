import { unprotectedPost } from 'services/apiWrapper'

export const UploadInvoice = formData => unprotectedPost('/api/uploadinvoice', formData)

export default {
  UploadInvoice
}
