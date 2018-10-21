import * as React from 'react';
import Header from 'components/Header';

interface IHeaderContainerProps {
  scroller: number;
}

class HeaderContainer extends React.Component<IHeaderContainerProps> {
  constructor(props: IHeaderContainerProps) {
    super(props);
  }

  public componentDidMount() {
    console.log(this.props.scroller);
  }

  private getStyles(scroller: number) {
    if(scroller > 10) {
      return ({
        backgroundColor: '#fff',
      });
    } else {
      return ({
        backgroundColor: '#f3f3f3',
      })
    }
  }

  public render() {
    return (
      <Header
        scroller={this.props.scroller}
        styles={this.getStyles(this.props.scroller)}
      />
    );
    
  }
}

export default HeaderContainer;
