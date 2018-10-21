import * as React from 'react';
import HeaderContainer from './containers/HeaderContainer';

import './App.css';

interface IAppState {
  scroller: number;
}

class App extends React.Component<{}, IAppState> {
  constructor(props: any) {
    super(props);

    this.state = {
      scroller: 0,
    };

    this.onScroll = this.onScroll.bind(this);
  }

  public componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  public componentWillMount() {
    window.removeEventListener('scroll', this.onScroll);
  }  

  private onScroll(): void {
    requestAnimationFrame(() => {
      const scrollTop = window.pageYOffset;
      this.setState(() => {
        return {scroller: scrollTop};
      });
    });
  }

  public render() {
    const { scroller } = this.state;
    return (
      <React.Fragment>
        <HeaderContainer scroller={scroller} />
        <main className="container">
          <h1>Personal Developer Blog</h1>
          <h1>Personal Developer Blog</h1>
          <h1>Personal Developer Blog</h1>
          <h1>Personal Developer Blog</h1>
          <h1>Personal Developer Blog</h1>
          <h1>Personal Developer Blog</h1>
          <h1>Personal Developer Blog</h1>
          <h1>Personal Developer Blog</h1>
          <h1>Personal Developer Blog</h1>
          <h1>Personal Developer Blog</h1>
          <h1>Personal Developer Blog</h1>
          <h1>Personal Developer Blog</h1>
          <h1>Personal Developer Blog</h1>
        </main>
      </React.Fragment>
    );

  }
}

export default App;
