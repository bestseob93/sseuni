import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  actionCreators as blogActions
} from 'ducks/blog.duck';

import WritePost from 'components/WritePost';

export default connect(
  null,
  (dispatch) => ({
    BlogActions: bindActionCreators(blogActions, dispatch),
  }),
)(WritePost);
