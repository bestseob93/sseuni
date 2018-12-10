import * as React from 'react';

import ToolBarItem from '../ToolBarItem';
import ToolBarItemCode from '../ToolBarItemCode';
import ToolBarItemImage from '../ToolBarItemImage';

import './ToolBar.css';

export interface IToolBarListProps {
  handleGistCode: (txt: string) => void
};

const ToolBarList: React.StatelessComponent<IToolBarListProps> = ({ handleGistCode }) => {

  // TODO: selection 위치에 따라 Toolbar 포지션 조정하기
  return (
    <div className="tikitaka-toolbar-wrapper">
      <ul>
        <ToolBarItem name="bold" />
        <ToolBarItem name="italic" />
        <ToolBarItem name="quote" />
        <ToolBarItemCode handleGistCode={handleGistCode} />
        <ToolBarItemImage />
      </ul>
    </div>
  );
}

export default ToolBarList;
