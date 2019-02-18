import * as React from 'react';
import Header from 'components/Header';


class HeaderContainer extends React.PureComponent<{}> {
  constructor(props: any) {
    super(props);
    this.state = {
      isVisible: false,
    };
  }

  onLoginClick = (): void => {
    this.setState({
      isVisible: true,
    })
  }

  render(): React.ReactNode {
    return (
      <Header />
    );
  }
}

export default HeaderContainer;
