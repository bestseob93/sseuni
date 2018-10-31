import { fromJS } from 'immutable';
import { createAction, handleActions } from 'redux-actions';

export const types = {
  REQUEST_DATA: 'main/REQUEST_DATA',
  RECEIVE_DATA: 'main/RECEIVE_DATA',
  INIT_IPFS: 'main/INIT_IPFS',
  SETUP_IPFS: 'main/SETUP_IPFS'
};

export const actionCreators = {
  requestData: createAction(types.REQUEST_DATA),
  receiveData: createAction(types.RECEIVE_DATA),
  initIpfs: createAction(types.INIT_IPFS),
  setupIpfs: createAction(types.SETUP_IPFS)
};

export interface IdefaultState {
  datas: object[],
  ipfs: object,
}

const defaultState: IdefaultState = fromJS({
  datas: [],
  ipfs: null
});

export default handleActions<IdefaultState>({
  [types.REQUEST_DATA]: (state) => {
    return state;
  },
  [types.RECEIVE_DATA]: (state, action) => {
    // return state.set('datas', fromJS(action.payload));
    return state;
  },
  [types.INIT_IPFS]: (state) => {
    return state;
  },
  [types.SETUP_IPFS]: (state, action) => {
    // return state.set('ipfs', fromJS(action.payload));
    return state;
  }
}, defaultState);
