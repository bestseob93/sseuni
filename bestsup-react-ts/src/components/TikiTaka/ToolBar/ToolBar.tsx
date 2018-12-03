import * as React from 'react';
import './ToolBar.css';

const ToolBarItem: React.StatelessComponent<{}> = () => {
  return (
    <li>1</li>
  );
}

const ToolBarList: React.StatelessComponent<{}> = () => {
  return (
    <div className="tikitaka-toolbar-wrapper">
      <ul>
        <ToolBarItem />
        <ToolBarItem />
        <ToolBarItem />
      </ul>
    </div>
  );
}

export default ToolBarList;
