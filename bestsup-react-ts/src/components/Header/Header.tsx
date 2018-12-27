import * as React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header: React.StatelessComponent<{}> = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <Link className="nav__item" to="/">Home</Link>
        <Link className="nav__item" to="/about">About</Link>
        <Link className="nav__item" to="/write">Write</Link>
      </nav>
    </header>
  );
};

export default Header;
