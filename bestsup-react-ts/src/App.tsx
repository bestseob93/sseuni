import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import HeaderContainer from './containers/HeaderContainer';
import TikiTakaContainer from 'containers/TikiTakaContainer';
import About from 'pages/AboutPage';
import Home from 'pages/HomePage';
import NotFound from './NotFound';

import './App.css';

class App extends React.Component<{}> {
  render() {
    return (
      <React.Fragment>
        <HeaderContainer />
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route
            path="/about"
            component={() => <About />}
          />
          <Route path="/write" component={TikiTakaContainer} />
          <Route component={NotFound} />
        </Switch>
      </React.Fragment>
    );

  }
}

export default App;
