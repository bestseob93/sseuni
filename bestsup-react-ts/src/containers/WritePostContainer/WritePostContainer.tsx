import * as React from 'react';
import MediumEditor from 'react-medium-editor';

import 'medium-editor/dist/css/medium-editor.css';
import 'medium-editor/dist/css/themes/default.css';

class WritePostContainer extends React.Component<{}> {
  render() {
    return (
      <div>
        <MediumEditor />
      </div>
    );
  }
}

export default WritePostContainer;
