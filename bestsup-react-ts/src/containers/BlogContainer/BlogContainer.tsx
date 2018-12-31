import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { IStoreState } from 'ducks';
import {
  BlogData,
  actionCreators as blogActions
} from 'ducks/blog.duck';

import Blog from 'components/Blog';

interface IBlogContainerProps {
  data: BlogData;
  BlogActions: typeof blogActions,
  match?: any
}

class BlogContainer extends React.PureComponent<IBlogContainerProps, {}> {
  constructor(props: IBlogContainerProps) {
    super(props);
  }

  async componentDidMount() {
    const { BlogActions, match } = this.props;
    const blogIdFromParameter: string = match.params.id;
    try {
      await BlogActions.requestBlog(blogIdFromParameter);
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    console.log(this.props);
    return <Blog data={this.props.data} />;
  }
}

export default connect(
  ({ blog }: IStoreState) => ({
    data: blog.blog,
  }),
  (dispatch) => ({
    BlogActions: bindActionCreators(blogActions, dispatch),
  }),
)(BlogContainer);
