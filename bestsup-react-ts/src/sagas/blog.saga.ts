import { take, takeLatest, call, put } from 'redux-saga/effects';
// import IPFS from 'ipfs-mini';
import * as blogAPI from 'services/blogAPI';

import { types, actionCreators as actions } from 'ducks/blog.duck';
import { IBlogEntity } from 'models';

export function* fetchBlogs() {
  let datas: IBlogEntity[];
  datas = yield call(blogAPI.fetchBlogs);
  console.log(datas);
  yield put(actions.receiveData(datas));
}

export function* watchFetchBlogs() {
  console.log('saga called');
  while (true) {

    yield takeLatest(types.REQUEST_DATA, fetchBlogs);
  }
}

export function* watchSetupIpfs() {
  while (true) {
    yield take(types.INIT_IPFS);
    // const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });
    // yield put(actions.setupIpfs(ipfs));
  }
}
