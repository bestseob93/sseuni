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


class CardContainer extends React.Component<ICardContainerProps, {}> {
  constructor(props: ICardContainerProps) {
    super(props);
  }

  async componentDidMount() {
    const { BlogActions } = this.props;
    try {
      await BlogActions.requestData();
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    return <CardList datas={this.props.datas} />
  }
}

export default connect(
  ({ blog }: IStoreState) => ({
    datas: blog.datas,
  }),
  (dispatch) => ({
    BlogActions: bindActionCreators(blogActions, dispatch),
  }),
)(CardContainer);
