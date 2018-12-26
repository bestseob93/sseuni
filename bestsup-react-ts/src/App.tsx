import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import HeaderContainer from './containers/HeaderContainer';
import About from 'pages/AboutPage';
import Home from 'pages/HomePage';
import Write from 'pages/WritePage';
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
          <Route path="/write" component={Write} />
          <Route component={NotFound} />
        </Switch>
      </React.Fragment>
    );

  }
}

export default App;
