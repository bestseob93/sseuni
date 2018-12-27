import * as React from 'react';

import PageTemplate from 'components/Templates';
import PostContainer from 'containers/PostContainer';

const PostPage: React.StatelessComponent<{}> = () => {
  return (
    <PageTemplate>
      <PostContainer />
    </PageTemplate>
  );
}

export default PostPage;
