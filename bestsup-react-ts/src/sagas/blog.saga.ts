import { take, call, put } from 'redux-saga/effects';
// import IPFS from 'ipfs-mini';
import { fetchBlogs } from 'services/blogAPI';

import { types, actionCreators as actions } from 'ducks/counter.duck';

export function* watchFetchImages() {
  console.log('saga called');
  while (true) {
    yield take(types.REQUEST_DATA);
    const datas = yield call(fetchBlogs);
    console.log(datas);
    yield put(actions.receiveData(datas));
  }
}

export function* watchSetupIpfs() {
  while (true) {
    yield take(types.INIT_IPFS);
    // const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });
    // yield put(actions.setupIpfs(ipfs));
  }
}
