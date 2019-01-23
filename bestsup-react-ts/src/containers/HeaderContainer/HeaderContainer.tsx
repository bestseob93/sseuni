import * as React from 'react';
import Header from 'components/Header';

class HeaderContainer extends React.Component<{}> {
  componentDidMount(): void {
    // console.log(this.props.scroller);
  }

  render(): React.ReactNode {
    return (
      <Header />
    );
  }
}

export default HeaderContainer;
