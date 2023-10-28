import SearchInput from '../search-input/SearchInput';
import './header.css';
import React from 'react';

type HeaderProps = {
  changeCurrentCharacter: (character: string) => void;
};

class Header extends React.Component<HeaderProps> {
  state = {
    searchValue: '',
  };

  handlerSearchInput = (inputValue: string) => {
    this.setState({ searchValue: inputValue });
  };

  render(): React.ReactNode {
    return (
      <header className="header">
        <h1 className="header__title">Marvel Heroes</h1>
        <div className="header__searchbox searchbox">
          <SearchInput handlerInput={this.handlerSearchInput} />
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
