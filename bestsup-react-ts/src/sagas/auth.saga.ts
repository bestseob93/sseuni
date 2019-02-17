import { take, takeLatest, call, put } from 'redux-saga/effects';
import * as loginAPI from 'services/loginAPI';

export function* requestLogin() {
  console.log('requstLogin saga called');
  const action = yield take(types.REQUEST_LOGIN);
  console.log(action);
  try {
    yield call(loginAPI.createBlog, action.payload);
    yield action.history.push('/');
  } catch (e) {
    console.error(e);
  }
}