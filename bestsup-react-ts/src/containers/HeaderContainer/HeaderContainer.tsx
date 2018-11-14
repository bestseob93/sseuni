import * as React from 'react';
import Header from 'components/Header';

class HeaderContainer extends React.Component<{}> {
  componentDidMount() {
    // console.log(this.props.scroller);
  }

  getStyles(scroller: number) {
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

  render() {
    return (
      <Header
        styles={this.getStyles(30)}
      />
    );
    
  }
}

export default HeaderContainer;
