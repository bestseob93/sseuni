import * as React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface IState {
  text?: string
}
class QuillWrite extends React.PureComponent<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = { text: '' }; // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value: any) {
    this.setState({ text: value });
  }

  render(): React.ReactNode {
    console.log(this.state.text);
    return (
      <div>
        <ReactQuill
          value={this.state.text}
          onChange={this.handleChange} />
      </div>
    );
  }
}

export default QuillWrite;
