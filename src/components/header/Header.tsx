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

  componentDidMount() {
    const storedValue = localStorage.getItem('input_value') || '';

    this.setState({ searchValue: storedValue });
    this.props.changeCurrentCharacter(storedValue);
  }

  handlerSearchInput = (inputValue: string) => {
    this.setState({ searchValue: inputValue });
    localStorage.setItem('input_value', inputValue);
  };

  render(): React.ReactNode {
    return (
      <header className="header">
        <h1 className="header__title">Marvel Heroes</h1>
        <div className="header__searchbox searchbox">
          <SearchInput
            handlerInput={this.handlerSearchInput}
            searchValue={this.state.searchValue}
          />
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
