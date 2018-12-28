import * as React from 'react';
import {
  BlogData
} from 'ducks/blog.duck';

const Blog: React.StatelessComponent<{data: BlogData}> = () => {
  return (
    <div>
      Blog
    </div>
  );
};

export default Blog;