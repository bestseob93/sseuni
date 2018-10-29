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
    if(scroller > 10) {
      const windowWidth = window.innerWidth;

      return ({
        position: 'fixed' as 'fixed',
        transform: 'translateZ(0)',
        width: `${windowWidth} - ${scroller}px`,
        right: 0,
        bottom: '10px',
        borderRadius: `50%`,
        transition: 'all 0.3s ease',
      });
    } else {
      return ({
        // backgroundColor: '#fff',
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