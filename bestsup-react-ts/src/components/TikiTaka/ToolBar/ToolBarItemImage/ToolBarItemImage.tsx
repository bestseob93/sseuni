import * as React from 'react';

import image from '../ToolBarIcons/image.svg';

class ToolBarItemImage extends React.Component<{}> {
  render() {
    return (
      <li className="toolbar-btn">
        <img src={image} />
      </li>
    );
  }
}

export default ToolBarItemImage;
