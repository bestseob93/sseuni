import { fromJS } from 'immutable';
import { createAction, handleActions } from 'redux-actions';
import { IBlogEntity } from 'models';

// TODO: actionCreator Type 정의하기
export const types = {
  REQUEST_DATA: 'main/REQUEST_DATA',
  RECEIVE_DATA: 'main/RECEIVE_DATA',
};

export const actionCreators = {
  requestData: createAction(types.REQUEST_DATA),
  receiveData: createAction(types.RECEIVE_DATA),
};

export interface IdefaultState {
  datas: IBlogEntity[],
}

const defaultState: IdefaultState = fromJS({
  datas: [],
});

export default handleActions<IdefaultState, any>({
  [types.REQUEST_DATA]: (state) => {
    return state;
  },
  [types.RECEIVE_DATA]: (state, action) => {
    return state.set('datas', fromJS(action.payload));
  },
  [types.INIT_IPFS]: (state) => {
    return state;
  },
  [types.SETUP_IPFS]: (state, action) => {
    // return state.set('ipfs', fromJS(action.payload));
    return state;
  }
}, defaultState);
