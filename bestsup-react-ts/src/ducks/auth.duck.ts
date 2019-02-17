import { Record } from 'immutable';
import { createAction, handleActions } from 'redux-actions';
import { IAuthEntity } from 'models';

export const types = {
  REQUEST_LOGIN: 'auth/REQUEST_LOGIN'
};

export const actionCreators = {
  requestLogin: createAction(types.REQUEST_LOGIN)
}

const AuthRecord = Record({
  username: '',
  password: ''
});

export class AuthData extends AuthRecord {
  public username: string;
  public password: string;
  constructor(params?: IAuthEntity) {
    params ? super(params) : super();
  }
}

const AuthStateRecord = Record({
  auth: AuthData
});

export class AuthState extends AuthStateRecord {
  auth: AuthData;
}

const defaultState = new AuthState();

export default handleActions<AuthState, any>({
  [types.REQUEST_LOGIN]: (state): AuthState => {
    return state;
  }
}, defaultState)
