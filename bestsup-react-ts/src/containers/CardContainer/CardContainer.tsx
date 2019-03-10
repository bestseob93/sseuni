import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { List } from 'immutable';

import { IStoreState } from 'ducks';
import {
  BlogData,
  actionCreators as blogActions
} from 'ducks/blog.duck';

import CardList from 'components/Card/CardList';

interface ICardContainerProps {
  datas: List<BlogData>;
  BlogActions: typeof blogActions;
}

// TODO: 상세 페이지 연결 안하고 원 페이지에 그대로 (모바일에서) pushState 사용)
class CardContainer extends React.Component<ICardContainerProps, {}> {
  constructor(props: ICardContainerProps) {
    super(props);
  }

  componentDidMount(): void {
    const { BlogActions } = this.props;
    BlogActions.requestBlogs();
  }

  render(): React.ReactNode {
    return <CardList datas={this.props.datas} />
  }
}

export default connect(
  ({ blog }: IStoreState) => ({
    datas: blog.blogs,
  }),
  (dispatch) => ({
    BlogActions: bindActionCreators(blogActions, dispatch),
  }),
)(CardContainer);
