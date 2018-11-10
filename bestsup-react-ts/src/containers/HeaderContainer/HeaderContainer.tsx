import * as React from 'react';
import Header from 'components/Header';
import { connect } from 'react-redux';
import { IStoreState } from 'ducks';
import {
  BlogData,
  actionCreators as blogActions
} from 'ducks/blog.duck';
import { bindActionCreators } from 'redux';
import { List } from 'immutable';

interface IHeaderContainerProps {
  scroller: number;
  datas: List<BlogData>;
  BlogActions: typeof blogActions;
}

class HeaderContainer extends React.Component<IHeaderContainerProps> {
  constructor(props: IHeaderContainerProps) {
    super(props);
  }

  public async componentDidMount() {
    // console.log(this.props.scroller);
    const { BlogActions } = this.props;
    try {
      await BlogActions.requestData();
    } catch (e) {
      console.error(e);
    }
  }

  private getStyles(scroller: number) {
    if(scroller > 10) {
      const windowWidth = window.innerWidth;

      return ({
        position: 'fixed' as 'fixed',
        transform: 'translateZ(0)',
        width: `${windowWidth} - ${scroller}px`,
        right: 0,
        bottom: '10px',
        borderRadius: `50%`,
        transition: 'all 0.3s ease',
      });
    } else {
      return ({
        // backgroundColor: '#fff',
        position: 'relative' as 'relative',
      });
    }
  }

  public render() {
    console.log(this.props);
    return (
      <Header
        scroller={this.props.scroller}
        styles={this.getStyles(this.props.scroller)}
      />
    );
    
  }
}

export default connect(
  ({ blog }: IStoreState) => ({
    datas: blog.datas,
  }),
  (dispatch) => ({
    BlogActions: bindActionCreators(blogActions, dispatch),
  })
)(HeaderContainer);
