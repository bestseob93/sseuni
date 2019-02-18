import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  actionCreators as uiActions
} from 'ducks/ui.duck';
import { IStoreState } from 'ducks';
import LoginModal from 'components/LoginModal';

interface IModalContainerProps {
  isLoginModalVisible: boolean,
  UiActions: typeof uiActions
}

class ModalContainer extends React.PureComponent<IModalContainerProps, {}> {
  closeLoginModal = (): void => {
    const { UiActions } = this.props;
    UiActions.hideLoginModal();
  }

  render(): React.ReactNode {
    console.log(this.props);
    return (
      <LoginModal
        isVisible={this.props.isLoginModalVisible}
        closeLoginModal={this.closeLoginModal}
      />
    );
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
