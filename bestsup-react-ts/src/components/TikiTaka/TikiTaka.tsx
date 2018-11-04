import * as React from 'react';
import BodyContent from './BodyContent';
import DefaultPlaceholder from './DefaultPlaceholder';

// @types/React 아직 업데이트되지 않음 (lazy, Suspence 등)
// const OtherComponent = React.lazy(() => import('./DefaultPlaceholder'));

import './TikiTaka.css';

// TODO: ContentEditable 컴포넌트화 시키기
class TikiTaka extends React.Component<{}> {
  public render() {
    return (
      <div className="tikitaka-editor">
        <h1 className="title" contentEditable={true} onChange={(e) => console.log(e)}>
          <DefaultPlaceholder />
        </h1>
        <BodyContent
          html="<h1>hi</h1>"
          onBlur={function() { return; }}
          onChange={function() { return; }}
          className={'hi'}
          style={{'color': 'black'}}
        />
      </div>
    );
  }
};

export default TikiTaka;
