import * as React from 'react';
import Header from 'components/Header';

class HeaderContainer extends React.Component<{}> {
  componentDidMount() {
    // console.log(this.props.scroller);
  }

  render() {
    return (
      <Header />
    );
  }
}

export default HeaderContainer;
