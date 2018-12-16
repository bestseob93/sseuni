import * as React from 'react';

export interface IPostTitleProps {
  handleChange?: (evt: React.SyntheticEvent) => void
}

const PostTitle: React.StatelessComponent<IPostTitleProps> = ({ handleChange }) => {
  return (
    <input
      className="tikitaka-title"
      placeholder="제목을 입력해주세요.."
      onChange={handleChange}
    />
  );
}

export default PostTitle;
