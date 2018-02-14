import { call, put } from 'redux-saga/effects'

export default (failureConst, saga, ...args) =>
  function* tryGenerator(action) {
    try {
      yield call(saga, ...args, action)
    } catch (err) {
      console.error('Error', err)
      yield put({ type: failureConst, payload: err })
    }
  }
