import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import HeaderContainer from './containers/HeaderContainer';
import About from 'pages/AboutPage';
import Home from 'pages/HomePage';

import './App.css';

interface IAppState {
  scroller: number;
  ticking: boolean;
}

class App extends React.Component<{}, IAppState> {
  constructor(props: any) {
    super(props);

    this.state = {
      scroller: 0,
      ticking: false,
    };
  }

  public componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  public componentWillMount() {
    window.removeEventListener('scroll', this.onScroll);
  }  

  private onScroll = (): void => {
    this.requestTick();
  }

  private requestTick = (): void => {
    if(!this.state.ticking) {
      this.setState({
        ticking: true,
      });

      requestAnimationFrame(this.update);
    }
  }

  private update = (): void => {
    const scrollTop = window.pageYOffset;
    this.setState(() => {
      return {scroller: scrollTop, ticking: false};
    });
  }

  public render() {
    const { scroller } = this.state;
    return (
      <React.Fragment>
        <HeaderContainer scroller={scroller} />
        <main className="container">
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route path="/About" component={About} />
          </Switch>
        </main>
      </React.Fragment>
    );

  }
}

export default App;
