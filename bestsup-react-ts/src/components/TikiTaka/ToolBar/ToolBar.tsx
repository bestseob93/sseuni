import * as React from 'react';
import './ToolBar.css';

import bold from './ToolBarIcons/bold.svg';
import italic from './ToolBarIcons/italic.svg';
import quote from './ToolBarIcons/quote.svg';

export interface IToolBarItemProps {
  name: string
}
const ToolBarItem: React.StatelessComponent<IToolBarItemProps> = ({ name }) => {
  const renderSvgByName = (iconName: string): string => {
    switch (iconName) {
      case 'bold':
        return bold;
      case 'italic':
        return italic;
      case 'quote':
        return quote;
      default:
        return bold;
    }
  };

  const execCommand = (e: React.SyntheticEvent, cmd: string) => {
    e.preventDefault();
    document.execCommand(cmd, false);
  };

  return (
    <li className="toolbar-btn" onClick={e => execCommand(e, name)}>
      <img src={renderSvgByName(name)} />
    </li>
  );
}

export interface IToolBarListProps{
  isToggled: boolean
}

const ToolBarList: React.StatelessComponent<IToolBarListProps> = ({ isToggled }) => {
  console.log(isToggled);
  return (
    <div className="tikitaka-toolbar-wrapper" style={{display: isToggled ? 'block' : 'none'}}>
      <ul>
        <ToolBarItem name="bold" />
        <ToolBarItem name="italic" />
        <ToolBarItem name="quote" />
      </ul>
    </div>
  );
}

export default ToolBarList;
