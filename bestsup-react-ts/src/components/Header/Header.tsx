import * as React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

interface IHeaderProps {
  styles: React.CSSProperties,
}

const Header: React.StatelessComponent<IHeaderProps> = ({styles}) => {
  return (
    <header style={styles}>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/write">Write</Link>
      </nav>
    </header>
  );
};

export default Header;
