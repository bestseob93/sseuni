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
    // console.log(this.props.scroller);
  }

  private getStyles(scroller: number) {
    console.log(scroller);
    if(scroller > 10) {
      return ({
        backgroundColor: '#87C8C8',
        position: 'sticky' as 'sticky',
        left: 0,
        right: 0,
        top: 0,
      });
    } else {
      return ({
        backgroundColor: '#fff',
        position: 'relative' as 'relative',
      });
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
