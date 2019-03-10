import { take, call, put } from 'redux-saga/effects';
import * as loginAPI from 'services/loginAPI';

import { types } from 'ducks/auth.duck';
import { actionCreators as uiActions } from 'ducks/ui.duck';
import { setLocalStorage } from 'helpers/storage';

export function* requestLogin() {
  console.log('requstLogin saga called');
  const action = yield take(types.REQUEST_LOGIN);
  console.log(action);
  try {
    yield call(loginAPI.requestLogin, action.payload);
    yield put(uiActions.hideLoginModal())
    yield setLocalStorage(action.payload)
  } catch (e) {
    console.error(e);
  }
}
