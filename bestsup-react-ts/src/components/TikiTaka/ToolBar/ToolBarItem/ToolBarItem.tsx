import * as React from 'react';

import bold from 'assets/Icons/bold.svg';
import italic from 'assets/Icons/italic.svg';
import quote from 'assets/Icons/quote.svg';

export interface IToolBarItemProps {
  name: string,
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
    if (document.activeElement) {
      console.log(document.activeElement.querySelector('p'));
    }
    document.execCommand(cmd, false);
  };

  return (
    <li className="toolbar__button" onClick={e => execCommand(e, name)}>
      <img className="toolbar__icon" src={renderSvgByName(name)} />
    </li>
  );
}

export default ToolBarItem;
