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

  private handleChange = (evt: React.ChangeEvent): void => {
    const input = evt.target as HTMLInputElement;
    this.setState({
      html: input.value,
    });
  };

  private sanitize = (): void => {
    const sanitizeConf = {
      allowedTags: ['b', 'i', 'em', 'strong', 'a', 'p', 'h1'],
      allowedAttributes: {
        a: ['href'],
      },
    }
    this.setState((prevState) => ({
      html: sanitizeHtml(prevState, sanitizeConf)
    }));
  }

  public render() {
    return (
      <div className="tikitaka-editor">
        <h1 className="title" contentEditable={true} onChange={(e) => console.log(e)}>
          <DefaultPlaceholder />
        </h1>
        <BodyContent
          html={this.state.html}
          onBlur={this.sanitize}
          onChange={this.handleChange}
          className={'hi'}
          style={{'color': 'black'}}
        />
      </div>
    );
  }
};

export default TikiTaka;
