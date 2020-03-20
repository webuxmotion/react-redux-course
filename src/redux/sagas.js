import { takeEvery, put, call } from 'redux-saga/effects'
import { REQUEST_USERS, FETCH_USERS } from './types'
import { showAlert } from './actions'

export function* sagaWatcher() {
  yield takeEvery(REQUEST_USERS, sagaWorker)
}

function* sagaWorker() {
  try {
    const payload = yield call(fetchUsers)
    yield put({ type: FETCH_USERS, payload })
  } catch(e) {
    yield put(showAlert('Что-то пошло не так'))
  }
}

async function fetchUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  return await response.json()
}