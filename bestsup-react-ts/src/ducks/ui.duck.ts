import { Record } from 'immutable';
import { createAction, handleActions } from 'redux-actions';

import { IUiEntity } from 'models';

export const types = {
  SHOW_LOGIN_MODAL: 'ui/SHOW_LOGIN_MODAL',
  HIDE_LOGIN_MODAL: 'ui/HIDE_LOGIN_MODAL'
};

export const actionCreators = {
  showLoginModal: createAction(types.SHOW_LOGIN_MODAL),
  hideLoginModal: createAction(types.HIDE_LOGIN_MODAL)
}
const UiStateMap = Record({
  isLoginModalVisible: false,
});

export class UiState extends UiStateMap {
  public isLoginModalVisible: boolean;
  constructor(params?: IUiEntity) {
    params ? super(params) : super();
  }
}

const defaultState = new UiState();

export default handleActions({
  [types.SHOW_LOGIN_MODAL]: (state) => {
    return state.set('isLoginModalVisible', true)
  },
  [types.HIDE_LOGIN_MODAL]: (state) => {
    return state.set('isLoginModalVisible', false)
  }
}, defaultState)
