import * as React from 'react';
import {
  BlogData
} from 'ducks/blog.duck';

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
      <div dangerouslySetInnerHTML={createMarkUp()} />
    </div>
  );
};

export default Blog;
