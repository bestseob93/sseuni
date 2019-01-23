import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  actionCreators as blogActions
} from 'ducks/blog.duck';

import QuillEditor from 'components/QuillEditor';

export default connect(
  null,
  (dispatch) => ({
    BlogActions: bindActionCreators(blogActions, dispatch)
  }),
)(QuillEditor);
