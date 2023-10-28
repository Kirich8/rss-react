import './header.css';
import React from 'react';

type HeaderProps = {
  changeCurrentCharacter: (character: string) => void;
};

class Header extends React.Component<HeaderProps> {
  state = {
    searchValue: '',
  };

  render(): React.ReactNode {
    return (
      <header className="header">
        <h1 className="header__title">Marvel Heroes</h1>
        <div className="header__searchbox searchbox">
          <input
            type="search"
            className="searchbox__search"
            onChange={(event) =>
              this.setState({ searchValue: event.currentTarget.value.trim() })
            }
          ></input>
          <button
            className="searchbox__button"
            onClick={() => {
              this.props.changeCurrentCharacter(this.state.searchValue);
            }}
          >
            Search
          </button>
        </div>
      </header>
    );
  }
}

export default Header;
