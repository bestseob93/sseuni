import * as React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

interface IHeaderProps {
  scroller: number;
  styles: React.CSSProperties,
}

const Header: React.StatelessComponent<IHeaderProps> = ({styles}) => {
  return (
    <header style={styles}>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
      </nav>
    </header>
  );
};

export default Header;