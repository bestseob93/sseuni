import { Record } from 'immutable';
import { createAction, handleActions } from 'redux-actions';
import { IAuthEntity } from 'models';

export const types = {
  REQUEST_LOGIN: 'auth/REQUEST_LOGIN',
  REQUEST_LOGIN_SUCCESS: 'auth/REQUEST_LOGIN_SUCCESS',
  REQUEST_LOGIN_FAILED: 'auth/REQUEST_LOGIN_FAILED',
  HANDLE_CHANGE: 'auth/HANDLE_CHANGE',
};

export const actionCreators = {
  requestLogin: createAction(types.REQUEST_LOGIN, (payload: any) => payload),
  requestLoginSuccess: createAction(types.REQUEST_LOGIN_SUCCESS, (payload: any) => payload),
  handleChange: (payload: any) => ({
    type: types.HANDLE_CHANGE,
    payload
  }),
};

const AuthRecord = Record({
  username: '',
  password: ''
});

export class AuthState extends AuthRecord {
  public username: string;
  public password: string;
  constructor(params?: IAuthEntity) {
    params ? super(params) : super();
  }
}

const defaultState = new AuthState();

export default handleActions<AuthState, any>({
  [types.REQUEST_LOGIN]: (state): AuthState => {
    return state;
  },
  [types.HANDLE_CHANGE]: (state, action): AuthState => {
    return state.withMutations(
      s => {
        s.set(action.payload.name, action.payload.value)
      }
    ) as AuthState
  }
}, defaultState)
