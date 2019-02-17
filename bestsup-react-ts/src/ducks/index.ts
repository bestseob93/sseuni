import { combineReducers } from 'redux';
import { BlogState } from './blog.duck';
import { UiState } from './ui.duck';

// except index.js file.
const req = require.context('.', true, /^(?!.\/index).*.ts$/);

// 스토어의 상태 타입 정의
export interface IStoreState {
  blog: BlogState;
  ui: UiState;
}

const reducers = {};

req.keys().forEach((key: any) => {
  const regex = /.\/(.*?).duck.ts$/;
  const duckName: any = regex.test(key) && key.match(regex)[1];
  reducers[duckName] = req(key).default;
});

console.log(reducers);

const ducks = combineReducers(reducers);

export default ducks;
