import * as React from 'react';
import sanitizeHtml from 'sanitize-html';
import BodyContent from './BodyContent';
import PostTitle from './PostTitle';
import ToolBarList from './ToolBar/ToolBarList';
import SubmitBtn from './SubmitBtn';

// @types/React 아직 업데이트되지 않음 (lazy, Suspence 등)
// const OtherComponent = React.lazy(() => import('./DefaultPlaceholder'));

import './TikiTaka.css';

export interface ITikiTakaProps {
  BlogActions: any
}

export interface ITikiTakaState {
  title: string,
  html: string,
  willBePostThumbnail: any
}

// TODO: ContentEditable 컴포넌트화 시키기
class TikiTaka extends React.Component<ITikiTakaProps, ITikiTakaState> {
  constructor(props: any) {
    super(props);

    this.state = {
      title: '',
      html: '',
      willBePostThumbnail: null,
    };
  }

  handleTitleChange = (evt: any): void => {
    this.setState({
      title: evt.target.value,
    });
  }

  handleChange = (evt: any): void => {
    this.setState({
      html: evt.target.value,
    });
  };

  addFirstImageToThumbnail = (file: any): void => {
    this.setState({
      willBePostThumbnail: file
    });
  }

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

  handleSubmit = (evt: React.FormEvent<HTMLButtonElement>) => {
    evt.preventDefault();

    const { BlogActions }  = this.props;
    const param = {
      title: this.state.title,
      content: this.state.html,
    }
    try {
      console.log(BlogActions);
      BlogActions.requestPost(param);
    } catch (err) {
      if (err) {
        throw err;
      }
    }
  }

  render() {
    console.log(this.state);
    return (
      <div className="tikitaka-editor">
        <ToolBarList
          addFirstImageToThumbnail={this.addFirstImageToThumbnail}
          handleGistCode={this.addGistCodeToHtml}
        />
        <SubmitBtn onSubmit={this.handleSubmit} />
        <PostTitle handleChange={this.handleTitleChange} />
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
