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
  checkLogin(kickToHome: () => void): void {
    const result: any = getLocalStorage()
    if (result) {
      if (!(result.username === 'unrealstyle')) {
        kickToHome()
      }
    } else {
      kickToHome()
    }
  }

  render() : React.ReactNode {
    return <QuillEditor { ...this.props } checkLogin={this.checkLogin} />
  }
}

export default connect(
  null,
  (dispatch) => ({
    BlogActions: bindActionCreators(blogActions, dispatch)
  }),
)(QuillEditorContainer);
