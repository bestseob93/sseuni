import * as React from 'react';

import './TikiTaka.css';

class TikiTaka extends React.Component<{}> {
  public render() {
    return (
      <div className="tikitaka-editor">
        <h1 className="title" contentEditable={true}>
          <span className="default-ph-t">Title</span>
        </h1>
        <p contentEditable={true}>
          <span className="default-ph-b">Body</span>
        </p>
      </div>
    );
  }
};

export default TikiTaka;
