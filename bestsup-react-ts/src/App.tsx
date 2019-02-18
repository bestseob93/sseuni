import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import HeaderContainer from 'containers/HeaderContainer';
import ModalContainer from 'containers/ModalContainer';

import About from 'pages/AboutPage';
import Home from 'pages/HomePage';
import Write from 'pages/WritePage';
import Quill from 'pages/QuillPage';
import Blog from 'pages/BlogPage';
import NotFound from './components/NotFound';

class App extends React.Component<{}> {
  render(): React.ReactNode {
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
          <Route path="/quill" component={Quill} />
          <Route path="/post/:title-:id" component={Blog} />
          <Route component={NotFound} />
        </Switch>
        <ModalContainer />
      </React.Fragment>
    );

  }
}

export default App;
