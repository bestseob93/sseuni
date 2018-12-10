import * as React from 'react';
import sanitizeHtml from 'sanitize-html';
import BodyContent from './BodyContent';
import DefaultPlaceholder from './DefaultPlaceholder';
import ToolBarList from './ToolBar/ToolBarList';

// @types/React 아직 업데이트되지 않음 (lazy, Suspence 등)
// const OtherComponent = React.lazy(() => import('./DefaultPlaceholder'));

import './TikiTaka.css';

export interface ITikiTakaState {
  html: string,
}

// TODO: ContentEditable 컴포넌트화 시키기
class TikiTaka extends React.Component<{}, ITikiTakaState> {
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
      allowedTags: false,
      allowedAttributes: false,
      allowedSchemes: ['data'],
    }
    console.log('sanitized');
    this.setState({
      html: sanitizeHtml(this.state.html, sanitizeConf)
    });
  }

  addGistCodeToHtml = (txt: string): void => {
    this.setState({
      html: this.state.html + txt,
    });
  }

  render() {
    console.log(this.state.html);
    return (
      <div className="tikitaka-editor">
        <ToolBarList handleGistCode={this.addGistCodeToHtml} />
        <h1 className="title" contentEditable={true} onChange={(e) => console.log(e)}>
          <DefaultPlaceholder />
        </h1>
        <BodyContent
          html={this.state.html}
          onBlur={this.sanitize}
          onChange={this.handleChange}
          style={{margin: '20px'}}
        />
      </div>
    );
  }
};

export default TikiTaka;
