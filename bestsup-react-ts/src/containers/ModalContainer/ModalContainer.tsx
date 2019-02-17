import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  actionCreators as uiActions
} from 'ducks/ui.duck';

import { IStoreState } from 'ducks';

class ModalContainer extends React.PureComponent<{}> {
  render(): React.ReactNode {
    console.log(this.props);
    return (
      <div>ModalContainer</div>
    )
  }
}

export default connect(
  ({ ui }: IStoreState) => ({
    isLoginModalVisible: ui.get('isLoginModalVisible'),
  }),
  (dispatch) => ({
    UiActions: bindActionCreators(uiActions, dispatch)
  })
)(ModalContainer);
