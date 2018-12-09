import * as React from 'react';
import './ToolBar.css';

import bold from './ToolBarIcons/bold.svg';
import italic from './ToolBarIcons/italic.svg';
import quote from './ToolBarIcons/quote.svg';
import code from './ToolBarIcons/code.svg';

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
      case 'code':
        return code;
      default:
        return bold;
    }
  };

  const insertEmbedCode = () => {
    const editorContainer = document.querySelector('.tikitaka-editor div[contenteditable="true"]');
    if (editorContainer !== null) {
      const arrayOfParagraphs = Array.from(editorContainer.children);
      const lastNode = arrayOfParagraphs[arrayOfParagraphs.length - 1];
      const iFrameEle = document.createElement('iframe');

      const encodedGist = encodeURI('bestseob93/da32c4c0ffc862c3ed205f06c44132ef.js');

      iFrameEle.src = `data:text/html;charset=utf-8,%3Cbody%3E%3Cscript%20src%3D%22https%3A%2F%2Fgist.github.com%2F${encodedGist}%22%3E%3C%2Fscript%3E%3C%2Fbody%3E`;

      lastNode.appendChild(iFrameEle);
      console.log(lastNode);
    }
  }

  const execCommand = (e: React.SyntheticEvent, cmd: string) => {
    e.preventDefault();
    if (cmd === 'code') {
      insertEmbedCode();
    } else {
      document.execCommand(cmd, false);
    }
  };

  return (
    <li className="toolbar-btn" onClick={e => execCommand(e, name)}>
      <img src={renderSvgByName(name)} />
    </li>
  );
}

const ToolBarList: React.StatelessComponent<{}> = () => {

  // TODO: selection 위치에 따라 Toolbar 포지션 조정하기
  return (
    <div className="tikitaka-toolbar-wrapper">
      <ul>
        <ToolBarItem name="bold" />
        <ToolBarItem name="italic" />
        <ToolBarItem name="quote" />
        <ToolBarItem name="code" />
      </ul>
    </div>
  );
}

export default ToolBarList;
