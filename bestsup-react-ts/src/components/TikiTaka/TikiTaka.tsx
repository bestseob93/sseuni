import * as React from 'react';
import sanitizeHtml from 'sanitize-html';
import S3FileUpload from 'react-s3';

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
  html: string
}

// TODO: ContentEditable 컴포넌트화 시키기
class TikiTaka extends React.Component<ITikiTakaProps, ITikiTakaState> {
  constructor(props: any) {
    super(props);

    this.state = {
      title: '',
      html: '',
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

  async addImageToS3(file: any): Promise<string> {
    const config = {
      bucketName: 'tikitakas',
      region: 'ap-northeast-2',
      accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
    };

    console.log(config);

    let imageUrl: string = '';
    try {
      await S3FileUpload
      .uploadFile(file, config)
      .then((result: any) => {
        console.log(result.location);
        imageUrl = result.location;
      })
      .catch((err: any) => console.error(err));
    } catch (e) {
      console.error(e);
    }

    return imageUrl;
  }

  sanitize = (): void => {
    const sanitizeConf = {
      allowedTags: false,
      allowedAttributes: false,
      allowedSchemes: ['data', 'https'],
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
    const imgElements = document.querySelector('.tikitaka-editor div[contenteditable="true"] img');
    let firstImageUrl: string | null = '';
    if (imgElements) {
      firstImageUrl = imgElements.getAttribute('src');
    }
    const { BlogActions }  = this.props;
    const param = {
      title: this.state.title,
      content: this.state.html,
      attachment: firstImageUrl,
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
    console.log(process.env.REACT_APP_AWS_SECRET_ACCESS_KEY);
    return (
      <div className="tikitaka-editor">
        <ToolBarList
          addImageToS3={this.addImageToS3}
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
