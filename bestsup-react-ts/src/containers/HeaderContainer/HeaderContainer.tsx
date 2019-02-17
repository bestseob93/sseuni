import * as React from 'react';
import Header from 'components/Header';

interface IHeaderContainerState {
  isVisible: boolean
}

class HeaderContainer extends React.PureComponent<{}, IHeaderContainerState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isVisible: false,
    };
  }

  onLoginClick = (): void => {
    this.setState({
      isVisible: true,
    });
  }

  render(): React.ReactNode {
    return (
      <Header isVisible={this.state.isVisible} onLoginClick={this.onLoginClick} />
    );
  }
}

export default HeaderContainer;
