import { PAYMENT } from 'store/actionTypes'

export const getBatches = () => ({ type: PAYMENT.GET.BATCHES.REQUEST })
export const getBatchPayments = BatchId => ({ type: PAYMENT.GET.PAYMENTS_IN_BATCH.REQUEST, payload: BatchId })
export const getPayments = timespan => ({ type: PAYMENT.GET.PAYMENT, payload: timespan })
