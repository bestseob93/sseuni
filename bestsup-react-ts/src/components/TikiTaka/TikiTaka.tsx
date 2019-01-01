import * as React from 'react';
import sanitizeHtml from 'sanitize-html';
import S3FileUpload from 'react-s3';
import { withRouter } from 'react-router-dom';

import BodyContent from './BodyContent';
import PostTitle from './PostTitle';
import ToolBarList from './ToolBar/ToolBarList';
import SubmitBtn from './SubmitBtn';

// @types/React 아직 업데이트되지 않음 (lazy, Suspence 등)
// const OtherComponent = React.lazy(() => import('./DefaultPlaceholder'));

import './TikiTaka.css';

export interface ITikiTakaProps {
  fetched: boolean,
  BlogActions: any,
  history: any
}

export interface ITikiTakaState {
  title: string,
  html: string,
  isToolBarVisible: boolean,
}

// TODO: ContentEditable 컴포넌트화 시키기
class TikiTaka extends React.Component<ITikiTakaProps, ITikiTakaState> {
  constructor(props: any) {
    super(props);

    this.state = {
      title: '',
      html: '',
      isToolBarVisible: true,
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

  addImageToS3 = async (file: any): Promise<string> => {
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

  handleSubmit = async (evt: React.FormEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    const firstImgElement = document.querySelector('.tikitaka-editor div[contenteditable="true"] img');
    const previewContentElement = document.querySelector('.tikitaka-editor div[contenteditable="true"] p');
    console.log(previewContentElement);
    let firstImageUrl: string | null = '';
    let firstPreviewContent: string | null = '';

    if (firstImgElement) {
      firstImageUrl = firstImgElement.getAttribute('src');
    }

    if (previewContentElement) {
      firstPreviewContent = previewContentElement.textContent;
    }
    const { BlogActions }  = this.props;
    const param = {
      title: this.state.title,
      previewContent: firstPreviewContent,
      content: this.state.html,
      attachment: firstImageUrl,
    };

    try {
      await BlogActions.requestCreateBlog(param, this.props.history);
    } catch (err) {
      if (err) {
        throw err;
      }
    }
  }

  toggleToolBar = (): void => {
    this.setState((prevState) => ({
      isToolBarVisible: !prevState.isToolBarVisible,
    }));
  }

  render() {
    return (
      <div className="tikitaka-editor">
        <ToolBarList
          addImageToS3={this.addImageToS3}
          handleGistCode={this.addGistCodeToHtml}
          isToggleVisible={this.state.isToolBarVisible}
        />
        <SubmitBtn
          onSubmit={this.handleSubmit}
          toggleToolBar={this.toggleToolBar}
        />
        <PostTitle handleChange={this.handleTitleChange} />
        <BodyContent
          html={this.state.html}
          onBlur={this.sanitize}
          onChange={this.handleChange}
        />
      </div>
    );
  }
};

export default withRouter(TikiTaka);
