import { call, put } from 'redux-saga/effects'

import API from 'services/api'
import { PAYMENT } from 'store/actionTypes'

export function* getPaymentBatches() {
  const { data } = yield call(API.Payment.get.allBatches)
  yield put({ type: PAYMENT.GET.BATCHES.SUCCESS, payload: data.PaymentBatches })
}

export function* getBatchPayments(action) {
  const { data } = yield call(API.Payment.get.batchPayments, action.payload)
  yield put({ type: PAYMENT.GET.PAYMENTS_IN_BATCH.SUCCESS, payload: data.Payments })
}

export default {
  getPaymentBatches,
  getBatchPayments
}
