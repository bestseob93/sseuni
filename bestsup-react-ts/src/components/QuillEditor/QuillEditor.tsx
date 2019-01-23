import * as React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';

interface IState {
  text?: string
}
class QuillEditor extends React.PureComponent<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = { text: '' }; // You can also pass a Quill Delta here
  }

  modules = {
    toolbar: [
      [{'header': [1, 2, false]}],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image', 'code-block'],
      ['clean']
    ],
  }

  handleChange = (value: any): void => {
    this.setState({ text: value });
  }

  render(): React.ReactNode {
    console.log(this.state.text);
    return (
      <React.Fragment>
        <ReactQuill
          theme="bubble"
          value={this.state.text}
          modules={this.modules}
          onChange={this.handleChange} />
      </React.Fragment>
    );
  }
}



export default QuillEditor;
