import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  actionCreators as uiActions
} from 'ducks/ui.duck';
import { IStoreState } from 'ducks';
import Header from 'components/Header';

interface IHeaderContainerProps {
  isLoginModalVisible: boolean,
  isLoginButtonVisible: boolean,
  UiActions: typeof uiActions
}

class HeaderContainer extends React.PureComponent<IHeaderContainerProps, {}> {
  openLoginModal = (): void => {
    const { UiActions } = this.props;
    UiActions.showLoginModal();
  }

  render(): React.ReactNode {
    return (
      <Header openLoginModal={this.openLoginModal} isLoginButtonVisible={this.props.isLoginButtonVisible} />
    );
  }
}

export default connect(
  ({ ui }: IStoreState) => ({
    isLoginModalVisible: ui.get('isLoginModalVisible'),
    isLoginButtonVisible: ui.get('isLoginButtonVisible')
  }),
  (dispatch) => ({
    UiActions: bindActionCreators(uiActions, dispatch)
  })
)(HeaderContainer);
