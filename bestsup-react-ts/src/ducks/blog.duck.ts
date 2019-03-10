import { Record, List } from 'immutable';
import { createAction, handleActions, Action } from 'redux-actions';
import { IBlogEntity } from 'models';

// TODO: actionCreator Type 정의하기
export const types = {
  REQUEST_BLOGS: 'blog/REQUEST_BLOGS',
  FETCH_BLOGS: 'blog/FETCH_BLOGS',
  REQUEST_BLOG: 'blog/REQUEST_BLOG',
  FETCH_BLOG: 'blog/FETCH_BLOG',
  REQUEST_CREATE_BLOG: 'blog/REQUEST_CREATE_BLOG',
};

type ResponsePayload = any;

export const actionCreators = {
  requestBlogs: createAction(types.REQUEST_BLOGS),
  fetchBlogs: createAction<ResponsePayload>(types.FETCH_BLOGS),
  requestBlog: createAction(types.REQUEST_BLOG, (id: string) => id),
  fetchBlog: createAction<ResponsePayload>(types.FETCH_BLOG),
  requestCreateBlog: (payload: any, history: any) => ({
    type: types.REQUEST_CREATE_BLOG,
    payload,
    history
  }),
};

const BlogRecord = Record({
  id: '0f4f0b90-d479-11e8-8fad-7fabbab8a3b2',
  title: 'no 1',
  previewContent: 'preview content in carditem',
  content: 'strabcedefsdfasfsdfga',
  attachment: 'https://cdn-images-1.medium.com/max/2000/1*ZARHKtn8NaeAAwUe2i9kWA.png',
  createdAt: 1540047358418,
});

export class BlogData extends BlogRecord {
  public id: string;
  public title: string;
  public previewContent: string;
  public content: string;
  public attachment: string;
  public createdAt: number;
  constructor(params?: IBlogEntity) {
    params ? super(params) : super();
  }
}

const BlogStateRecord = Record({
  blogs: List(),
  blog: BlogData,
});

export class BlogState extends BlogStateRecord {
  blogs: List<BlogData>;
  blog: BlogData;
}

const defaultState = new BlogState();

export default handleActions<BlogState, any>({
  [types.REQUEST_BLOGS]: (state: BlogState) => {
    return state;
  },
  [types.FETCH_BLOGS]: (state: BlogState, action: Action<ResponsePayload>) => {
    return state.withMutations(
      s => {
        s.set('blogs', List(action.payload));
      }
    ) as BlogState;
  },
  [types.REQUEST_BLOG]: (state: BlogState) => {
    return state;
  },
  [types.FETCH_BLOG]: (state: BlogState, action: Action<ResponsePayload>) => {
    return state.withMutations(
      s => {
        s.set('blog', action.payload);
      }
    ) as BlogState;
  },
  [types.REQUEST_CREATE_BLOG]: (state): BlogState => {
    return state;
  }
}, defaultState);
