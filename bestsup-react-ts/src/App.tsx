import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import HeaderContainer from './containers/HeaderContainer';
import TikiTakaContainer from 'containers/TikiTakaContainer';
import HomePage from 'pages/HomePage';
import BlogPage from 'pages/BlogPage';
import AboutPage from 'pages/AboutPage';
import NotFound from './NotFound';

import './App.css';

class App extends React.Component<{}> {
  render() {
    return (
      <React.Fragment>
        <HeaderContainer />
        <Switch>
          <Route exact={true} path="/" component={HomePage} />
          <Route path="/blog/:title" component={BlogPage} />
          <Route
            path="/about"
            component={() => <AboutPage />}
          />
          <Route path="/write" component={TikiTakaContainer} />
          <Route component={NotFound} />
        </Switch>
      </React.Fragment>
    );

  }
}

export default App;
