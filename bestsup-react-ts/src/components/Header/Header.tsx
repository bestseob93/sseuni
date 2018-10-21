import * as React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

class Header extends React.Component {
  private navRef = React.createRef<HTMLDivElement>();

  public render() {
    console.log(this.navRef);
    return (
      <header>
        <nav className="navbar" ref={this.navRef}>
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
        </nav>
      </header>
    );
  }
}

export default Header;
