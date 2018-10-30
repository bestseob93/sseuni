import { combineReducers } from 'redux';
import counter, { ICounterState } from './counter.duck';

export default combineReducers({
  counter
});

// 스토어의 상태 타입 정의
export interface IStoreState {
  counter: ICounterState;
}
