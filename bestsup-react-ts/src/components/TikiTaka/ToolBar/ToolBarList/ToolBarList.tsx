import * as React from 'react';

import ToolBarItem from '../ToolBarItem';
import ToolBarItemCode from '../ToolBarItemCode';
import ToolBarItemImage from '../ToolBarItemImage';

import './ToolBarList.css';

export interface IToolBarListProps {
  handleGistCode: (txt: string) => void,
  addImageToS3: (file: any) => Promise<string>,
  isToolBarVisible: boolean,
  style: React.CSSProperties
};

class ToolBarList extends React.PureComponent<IToolBarListProps, {}> {
  render(): React.ReactNode {
    const { handleGistCode, addImageToS3, isToolBarVisible, style } = this.props;
    console.log(style);
    return (
      <div
        className={`toolbar__wrapper ${isToolBarVisible ? '' : 'toolbar__wrapper-hide'}`}
        style={style}
      >
        <ul className="toolbar__icons-list">
          <ToolBarItem name="bold" />
          <ToolBarItem name="italic" />
          <ToolBarItem name="quote" />
          <ToolBarItemCode handleGistCode={handleGistCode} />
          <ToolBarItemImage addImageToS3={addImageToS3} handleGistCode={handleGistCode} />
        </ul>
      </div>
    );
  }
}
export default ToolBarList;
