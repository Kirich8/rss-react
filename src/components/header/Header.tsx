import './header.css';
import React from 'react';
import SearchButton from '../search-button/SearchButton';
import SearchInput from '../search-input/SearchInput';

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
          <SearchButton
            handlerButton={this.props.changeCurrentCharacter}
            searchValue={this.state.searchValue}
          />
        </div>
      </header>
    );
  }
}

export default Header;
