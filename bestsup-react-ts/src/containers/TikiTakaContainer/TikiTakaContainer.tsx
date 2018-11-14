import * as React from 'react';
import TikiTaka from 'components/TikiTaka';

class TikiTakaContainer extends React.Component<{}> {

  componentDidMount() {
    // console.log(this.props.scroller);
  }

  render() {
    return (
      <TikiTaka />
    );
  }
}

export default TikiTakaContainer;
