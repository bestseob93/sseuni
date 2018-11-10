import { Record, List, fromJS } from 'immutable';
import { createAction, handleActions, Action } from 'redux-actions';
import { IBlogEntity } from 'models';

// TODO: actionCreator Type 정의하기
export const types = {
  REQUEST_DATA: 'main/REQUEST_DATA',
  RECEIVE_DATA: 'main/RECEIVE_DATA',
};

type ResponsePayload = any;

export const actionCreators = {
  requestData: createAction(types.REQUEST_DATA),
  receiveData: createAction<ResponsePayload>(types.RECEIVE_DATA),
};

const BlogRecord = Record({
  id: '0f4f0b90-d479-11e8-8fad-7fabbab8a3b2',
  title: 'no 1',
  content: 'strabcedefsdfasfsdfga',
  attachment: 'https://cdn-images-1.medium.com/max/2000/1*ZARHKtn8NaeAAwUe2i9kWA.png',
  createdAt: 1540047358418,
});

export class BlogData extends BlogRecord {
  public id: string;
  public title: string;
  public content: string;
  public attachment: string;
  public createdAt: number;
  constructor(params?: IBlogEntity) {
    params ? super(params) : super();
  }
}

const BlogStateRecord = Record({
  datas: List(),
});

export class BlogState extends BlogStateRecord {
  public datas: List<BlogData>
}

const defaultState = new BlogState();

export default handleActions<BlogState, any>({
  [types.REQUEST_DATA]: (state): BlogState => {
    return state;
  },
  [types.RECEIVE_DATA]: (state, action: Action<ResponsePayload>): BlogState => {
    return state.withMutations(
      s => {
        s.set('datas', fromJS(action.payload));
      }
    ) as BlogState;
  },
}, defaultState);
