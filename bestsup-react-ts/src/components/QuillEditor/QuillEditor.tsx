import * as React from 'react';
import ReactQuill from 'react-quill';
import { withRouter } from 'react-router-dom';
import S3FileUpload from 'react-s3';
import PostTitle from 'components/TikiTaka/PostTitle';

import 'react-quill/dist/quill.bubble.css';

interface IState {
  html?: string,
  title?: string
}
class QuillEditor extends React.PureComponent<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      html: '',
      title: '',
    }; // You can also pass a Quill Delta here
  }

  editorRef: ReactQuill;

  selectLocalImage = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.click();

    input.onchange = () => {
      if (!input.files) { return; }
      const file = input.files[0];

      if (/^image\//.test(file.type)) {
        this.addImageToS3(file);
      } else {
        console.warn('이미지만 업로드 해야합니다.');
      }
    };
  }

  addImageToS3 = async (file: any): Promise<void> => {
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
        this.insertToEditor(imageUrl);
      })
      .catch((err: any) => console.error(err));
    } catch (e) {
      console.error(e);
    }
  }

  insertToEditor = (imageUrl: string): void => {
    const editor = this.editorRef.getEditor();
    const range = editor.getSelection();
    if (!range) { return; }
    editor.insertEmbed(range.index, 'image', imageUrl);
  }

  modules = {
    toolbar: {
      container: [
        [{'header': [1, 2, false]}],
        ['bold', 'italic', 'underline','strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image', 'code-block'],
        ['clean']
      ],
      handlers: {
        image: this.selectLocalImage
      }
    }
  }

  handleChange = (value: string): void => {
    this.setState({ html: value });
  }

  handleTitleChange = (evt: any): void => {
    this.setState({
      title: evt.target.value,
    });
  }

  render(): React.ReactNode {
    console.log(this.state.html);
    return (
      <React.Fragment>
        <PostTitle handleChange={this.handleTitleChange} />
        <ReactQuill
          ref={(el) => {if (el) {this.editorRef = el;}}}
          theme="bubble"
          value={this.state.html}
          modules={this.modules}
          placeholder={"Write here..."}
          onChange={this.handleChange} />
      </React.Fragment>
    );
  }
}

export default withRouter(QuillEditor);
