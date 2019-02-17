import { createAction, handleAction } from 'redux-actions';

export const types = {
  REQUEST_LOGIN: 'auth/REQUEST_LOGIN'
};

export const actionCreators = {
  requestLogin: createAction(types.REQUEST_LOGIN)
}