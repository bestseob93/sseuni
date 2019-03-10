import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  actionCreators as authActions
} from 'ducks/auth.duck';
import {
  actionCreators as uiActions
} from 'ducks/ui.duck';
import { IStoreState } from 'ducks';
import LoginModal from 'components/LoginModal';

interface IModalContainerProps {
  isLoginModalVisible: boolean,
  loginInfo: {
    username: string,
    password: string
  },
  AuthActions: typeof authActions,
  UiActions: typeof uiActions
}

class ModalContainer extends React.PureComponent<IModalContainerProps, {}> {
  closeLoginModal = (): void => {
    const { UiActions } = this.props;
    UiActions.hideLoginModal();
  }

  handleChange = (e: React.SyntheticEvent): void => {
    const { AuthActions } = this.props;
    const { name, value } = e.target as HTMLInputElement;
    const payload = {
      name,
      value
    };

    AuthActions.handleChange(payload);
  }

  handleSubmit = async (): Promise<void> => {
    const { AuthActions, loginInfo } = this.props;
    await AuthActions.requestLogin(loginInfo);
  }

  render(): React.ReactNode {
    return (
      <LoginModal
        isVisible={this.props.isLoginModalVisible}
        closeLoginModal={this.closeLoginModal}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
      />
    );
  }
}

export default connect(
  ({ ui, auth }: IStoreState) => ({
    isLoginModalVisible: ui.get('isLoginModalVisible'),
    loginInfo: {
      username: auth.get('username'),
      password: auth.get('password')
    }
  }),
  (dispatch) => ({
    AuthActions: bindActionCreators(authActions, dispatch),
    UiActions: bindActionCreators(uiActions, dispatch)
  })
)(ModalContainer);
