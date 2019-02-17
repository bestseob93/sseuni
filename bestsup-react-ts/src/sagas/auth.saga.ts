import { take, call } from 'redux-saga/effects';
import * as loginAPI from 'services/loginAPI';

import { types } from 'ducks/auth.duck';

export function* requestLogin() {
  console.log('requstLogin saga called');
  const action = yield take(types.REQUEST_LOGIN);
  console.log(action);
  try {
    yield call(loginAPI.requestLogin, action.payload);
    // yield action.closeModal
  } catch (e) {
    console.error(e);
  }
}
