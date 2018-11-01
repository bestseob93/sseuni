import * as React from 'react';
import TikiTaka from 'components/TikiTaka';

class TikiTakaContainer extends React.Component<{}> {

  public componentDidMount() {
    // console.log(this.props.scroller);
  }

  public render() {
    return (
      <TikiTaka />
    );
  }
}

export default TikiTakaContainer;
