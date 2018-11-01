import * as React from 'react';
import DefaultPlaceholder from './DefaultPlaceholder';

import './TikiTaka.css';

// TODO: ContentEditable 컴포넌트화 시키기
class TikiTaka extends React.Component<{}> {
  public render() {
    return (
      <div className="tikitaka-editor">
        <h1 className="title" contentEditable={true} onChange={(e) => console.log(e)}>
          <DefaultPlaceholder />
        </h1>
        <p contentEditable={true}>
          <span className="default-ph-b">Body</span>
        </p>
      </div>
    );
  }
};

export default TikiTaka;
