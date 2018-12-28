import * as React from 'react';

import PageTemplate from 'components/Templates';
import BlogContainer from 'containers/BlogContainer';

const BlogPost: React.StatelessComponent<{}> = (props) => {
  return (
    <PageTemplate>
      <BlogContainer {...props} />
    </PageTemplate>
  );
}

export default BlogPost;
