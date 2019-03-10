import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  actionCreators as uiActions
} from 'ducks/ui.duck';

interface IHiddenContainerProps {
  UiActions: typeof uiActions
}

class HiddenContainer extends React.Component<IHiddenContainerProps, {}> {
  componentDidMount(): void {
    const { UiActions } = this.props;

    UiActions.showLoginButton()
  }
  render(): React.ReactNode {
    return (
      <div>
        HiddenContainer
      </div>
    );
  }
}

export default connect(
  null,
  (dispatch) => ({
    UiActions: bindActionCreators(uiActions, dispatch)
  })
)(HiddenContainer);
