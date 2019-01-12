import * as React from 'react';
import './InlineMenu.css';
import Plus from 'assets/Icons/plus.svg';
import Minus from 'assets/Icons/minus.svg';

interface IinlineMenuProps {
  isInlineMenuVisible: boolean,
  style: React.CSSProperties
}

interface IinlineMenuState {
  togglePlus: boolean,
  plusStyle: React.CSSProperties,
  minusStyle: React.CSSProperties
}

class InlineMenu extends React.PureComponent<IinlineMenuProps, IinlineMenuState> {
  constructor(props: IinlineMenuProps) {
    super(props);

    this.state = {
      togglePlus: false,
      plusStyle: {},
      minusStyle: {},
    };
  }
  render() {
    // TODO: left는 tikitaka 기준 -30px, top은 마지막 paragraph의 offsetTop 값
    const { isInlineMenuVisible, style } = this.props;
    const rotateIt = (e: any) => {
      e.preventDefault();
      if (this.state.togglePlus) {
        this.setState({
          togglePlus: false,
          plusStyle: {
            transform: 'rotateZ(-90deg) scale(1)',
            transition: 'all 0.5s ease-in-out',
            opacity: 1,
          },
          minusStyle: {
            transform: 'scale(0)',
            transition: 'all 0.5s ease-in-out',
            opacity: 0,
          }
        });
      } else {
        this.setState({
          togglePlus: true,
          plusStyle: {
            transform: 'rotateZ(90deg) scale(0)',
            transition: 'all 0.5s ease-in-out',
            opacity: 0,
          },
          minusStyle: {
            transform: 'scale(1)',
            transition: 'all 0.5s ease-in-out',
            opacity: 1,
          }
        });
      }
    };

    return (
      <div style={style} className={`FAB ${isInlineMenuVisible ? '' : 'FAB-hide'}`}  onClick={rotateIt}>
        <img style={this.state.plusStyle} className="FAB__icons FAB__icons-plus" src={Plus} alt="plus" />
        <img style={this.state.minusStyle} className="FAB__icons FAB__icons-minus" src={Minus} alt="minus" />
      </div>
    );
  }
}

export default InlineMenu;
