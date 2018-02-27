import { call, put, race, take, cancelled, takeLatest, takeEvery } from 'redux-saga/effects'

const SagaWrapper = (asyncConst, saga, ...args) =>
  function* worker(action) {
    const param = args.length > 0 ? args : [action]
    try {
      yield call(saga, ...param)
    } catch (err) {
      console.error('Error', ...param, err)
      yield put({ type: asyncConst.FAILURE, payload: err })
    } finally {
      if (yield cancelled()) {
        console.log('Cancelled action', ...param)
        yield put({ type: asyncConst.CANCELLED, payload: { type: 'cancelled', message: 'Cancelled request' } })
      }
    }
  }

const CancellableTask = (asyncTask, asyncConst) =>
  function* watcher(action) {
    yield race({
      task: call(SagaWrapper(asyncConst, asyncTask, action)),
      cancel: take(asyncConst.CANCEL)
    })
  }

const takeEveryWrapper = (asyncConst, asyncTask) => takeEvery(asyncConst.REQUEST, CancellableTask(asyncTask, asyncConst))
const takeLatestWrapper = (asyncConst, asyncTask) => takeLatest(asyncConst.REQUEST, CancellableTask(asyncTask, asyncConst))

export { SagaWrapper, CancellableTask, takeEveryWrapper, takeLatestWrapper }
export default SagaWrapper
