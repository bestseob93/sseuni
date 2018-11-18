import * as React from 'react';
import sanitizeHtml from 'sanitize-html';
import BodyContent from './BodyContent';
import DefaultPlaceholder from './DefaultPlaceholder';

// @types/React 아직 업데이트되지 않음 (lazy, Suspence 등)
// const OtherComponent = React.lazy(() => import('./DefaultPlaceholder'));

import './TikiTaka.css';

export interface ITikiTaka {
  html: string,
}

// TODO: ContentEditable 컴포넌트화 시키기
class TikiTaka extends React.Component<{}, ITikiTaka> {
  constructor(props: any) {
    super(props);

    this.state = {
      html: '',
    };
  }

  handleChange = (evt: any): void => {
    this.setState({
      html: evt.target.value,
    });
  };

  sanitize = (): void => {
    const sanitizeConf = {
      allowedTags: ['b', 'i', 'em', 'strong', 'a', 'p', 'div', 'h1'],
      allowedAttributes: {
        a: ['href'],
      },
    }
    this.setState({
      html: sanitizeHtml(this.state.html, sanitizeConf)
    });
  }

  render() {
    console.log(JSON.stringify(this.state.html));
    return (
      <div className="tikitaka-editor">
        <h1 className="title" contentEditable={true} onChange={(e) => console.log(e)}>
          <DefaultPlaceholder />
        </h1>
        <BodyContent
          html={this.state.html}
          onBlur={this.sanitize}
          onChange={this.handleChange}
        />
      </div>
    );
  }
};

export default TikiTaka;
