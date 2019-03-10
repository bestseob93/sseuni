import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  actionCreators as blogActions
} from 'ducks/blog.duck';

import QuillEditor from 'components/QuillEditor';
import { getLocalStorage } from 'helpers/storage';

interface IQuillEditorContainer {
  BlogActions: typeof blogActions
}

class QuillEditorContainer extends React.Component<IQuillEditorContainer, {}> {
  componentDidMount(): void {
    this.checkLogin()
  }

  checkLogin(): void {
    const result: any = getLocalStorage()

    if (result.username === 'unrealstyle') {
      console.log('login');
    }
  }

  render() : React.ReactNode {
    return <QuillEditor { ...this.props } />
  }
}

export default connect(
  null,
  (dispatch) => ({
    BlogActions: bindActionCreators(blogActions, dispatch)
  }),
)(QuillEditorContainer);
