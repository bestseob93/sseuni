import * as React from 'react';

import image from '../ToolBarIcons/image.svg';
import { findLastNode, appendFirstChild } from 'helpers/domHelpers';

class ToolBarItemImage extends React.Component<{}> {
  insertImage = (): void => {
    const editorContainer = document.querySelector('.tikitaka-editor div[contenteditable="true"]');

    if (editorContainer) {
      const lastNode = findLastNode(editorContainer) || appendFirstChild(editorContainer);
      console.log(lastNode);
    }
  }

  render() {
    return (
      <li className="toolbar-btn" onClick={this.insertImage}>
        <input id="inputId" type="file" style={{position: 'fixed', top: '-100em'}} />
        <img src={image} />
      </li>
    );
  }
}

export default ToolBarItemImage;
