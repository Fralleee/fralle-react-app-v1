// import { USER } from 'store/actionTypes'
import { createReducer } from 'utils/reducerUtils'

const initialState = {
  activities: [],
  tasks: [],
  userDataFetched: false
}

export default createReducer(initialState, {
  // [USER.PERMISSION.SUCCESS]: (state, action) =>
  //   Object.assign({}, state, {
  //     activities: tempData.activities,
  //     tasks: tempData.tasks,
  //     userDataFetched: true
  //   })
})
