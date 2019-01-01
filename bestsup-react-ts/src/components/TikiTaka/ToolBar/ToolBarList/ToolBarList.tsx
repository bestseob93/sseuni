import * as React from 'react';

import ToolBarItem from '../ToolBarItem';
import ToolBarItemCode from '../ToolBarItemCode';
import ToolBarItemImage from '../ToolBarItemImage';

import './ToolBarList.css';

export interface IToolBarListProps {
  handleGistCode: (txt: string) => void,
  addImageToS3: (file: any) => Promise<string>,
  isToggleVisible: boolean,
};

const ToolBarList: React.StatelessComponent<IToolBarListProps> = ({ handleGistCode, addImageToS3, isToggleVisible }) => {

  // TODO: selection 위치에 따라 Toolbar 포지션 조정하기
  return (
    <div className={`toolbar__wrapper ${isToggleVisible ? '' : 'toolbar__wrapper-hide'}`}>
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

export default ToolBarList;
