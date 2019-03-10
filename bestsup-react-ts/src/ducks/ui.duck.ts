import { Record } from 'immutable';
import { createAction, handleActions } from 'redux-actions';

import { IUiEntity } from 'models';

export const types = {
  SHOW_LOGIN_MODAL: 'ui/SHOW_LOGIN_MODAL',
  HIDE_LOGIN_MODAL: 'ui/HIDE_LOGIN_MODAL',
  SHOW_LOGIN_BUTTON: 'ui/SHOW_LOGIN_BUTTON',
  HIDE_LOGIN_BUTTON: 'ui/HIDE_LOGIN_BUTTON'
};

export const actionCreators = {
  showLoginModal: createAction(types.SHOW_LOGIN_MODAL),
  hideLoginModal: createAction(types.HIDE_LOGIN_MODAL),
  showLoginButton: createAction(types.SHOW_LOGIN_BUTTON),
  hideLoginButton: createAction(types.HIDE_LOGIN_BUTTON)
}
const UiStateMap = Record({
  isLoginModalVisible: false,
  isLoginButtonVisible: false,
});

export class UiState extends UiStateMap {
  public isLoginModalVisible: boolean;
  public isLoginButtonVisble: boolean;
  constructor(params?: IUiEntity) {
    params ? super(params) : super();
  }
}

const defaultState = new UiState();

export default handleActions({
  [types.SHOW_LOGIN_MODAL]: (state: UiState) => {
    return state.set('isLoginModalVisible', true)
  },
  [types.HIDE_LOGIN_MODAL]: (state: UiState) => {
    return state.set('isLoginModalVisible', false)
  },
  [types.SHOW_LOGIN_BUTTON]: (state: UiState) => {
    return state.set('isLoginButtonVisible', true)
  },
  [types.HIDE_LOGIN_BUTTON]: (state: UiState) => {
    return state.set('isLoginButtonVisible', false)
  }
}, defaultState)
