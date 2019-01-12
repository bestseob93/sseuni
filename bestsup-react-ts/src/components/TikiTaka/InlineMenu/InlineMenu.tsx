import * as React from 'react';
import './InlineMenu.css';

interface IinlineMenuProps {
  isInlineMenuVisible: boolean,
  style: React.CSSProperties
}
class InlineMenu extends React.PureComponent<IinlineMenuProps, {}> {
  render() {
    // TODO: left는 tikitaka 기준 -30px, top은 마지막 paragraph의 offsetTop 값
    const { isInlineMenuVisible, style } = this.props;
    return (
      <div style={style} className={`FAB ${isInlineMenuVisible ? '' : 'FAB-hide'}`}>.</div>
    );
  }
}

export default InlineMenu;
