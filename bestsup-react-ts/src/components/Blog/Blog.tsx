import * as React from 'react';
import {
  BlogData
} from 'ducks/blog.duck';
import { convertedDate } from 'helpers/converTo';
import './Blog.css';

const Blog: React.StatelessComponent<{data: BlogData}> = (props) => {
  const {
    data
  } = props;
  const createMarkUp = () => {
    return {
      __html: data.content,
    };
  };

  return (
    <div className="tikitaka">
      <h1 className="tikitaka__title">{data.title}</h1>
      <div className="post__byline"><em>{convertedDate(data.createdAt)}</em></div>
      <div className="post__content" dangerouslySetInnerHTML={createMarkUp()} />
    </div>
  );
};

export default Blog;
