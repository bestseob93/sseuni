import * as React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

interface IHeaderProps {
  openLoginModal: () => void
}

const Header: React.StatelessComponent<IHeaderProps> = ({ openLoginModal }) => {
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav__item"><Link to="/">Home</Link></li>
          <li className="nav__item"><Link to="/about">About</Link></li>
          <li className="nav__item"><Link to="/quill">Write</Link></li>
          <li className="nav__item"><a href="#" onClick={openLoginModal}>Login</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
