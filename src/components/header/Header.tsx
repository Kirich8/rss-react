import './header.css';
import React from 'react';

class Header extends React.Component {
  render(): React.ReactNode {
    return (
      <header className="header">
        <h1 className="header__title">Heroes</h1>
        <div className="header__searchbox searchbox">
          <input type="search" className="searchbox__search"></input>
          <button type="submit" className="searchbox__button">
            Search
          </button>
        </div>
      </header>
    );
  }
}

export default Header;
