import { Record, List } from 'immutable';
import { createAction, handleActions, Action } from 'redux-actions';
import { IBlogEntity } from 'models';

// TODO: actionCreator Type 정의하기
export const types = {
  REQUEST_DATA: 'blog/REQUEST_DATA',
  FETCH_DATA: 'blog/FETCH_DATA',
  REQUEST_POST: 'blog/REQUEST_POST',
};

type ResponsePayload = any;

export const actionCreators = {
  requestData: createAction(types.REQUEST_DATA),
  fetchData: createAction<ResponsePayload>(types.FETCH_DATA),
  requestPost: createAction(types.REQUEST_POST, (data: any) => data),
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
  post: Record,
});

export class BlogState extends BlogStateRecord {
  datas: List<BlogData>;
  post: BlogData;
}

const defaultState = new BlogState();

export default handleActions<BlogState, any>({
  [types.REQUEST_DATA]: (state): BlogState => {
    return state;
  },
  [types.FETCH_DATA]: (state, action: Action<ResponsePayload>): BlogState => {
    return state.withMutations(
      s => {
        s.set('datas', List(action.payload));
      }
    ) as BlogState;
  },
  [types.REQUEST_POST]: (state): BlogState => {
    return state;
  }
}, defaultState);
