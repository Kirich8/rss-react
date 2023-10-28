import './App.css';
import React from 'react';
import Header from '../components/header/Header';
import Main from '../pages/main/Main';
import { apiService } from '../utils/services/ApiServices';

class App extends React.Component {
  state = {
    characters: [],
  };

  changeCurrentCharacter = async (character: string) => {
    this.setState({
      characters: character
        ? await apiService.getCurrentCharacter(character)
        : await apiService.getCharacters(),
    });
  };

  async componentDidMount() {
    this.setState({ characters: await apiService.getCharacters() });
  }

  render(): React.ReactNode {
    return (
      <>
        <Header changeCurrentCharacter={this.changeCurrentCharacter} />
        {this.state.characters.length ? (
          <Main characters={this.state.characters} />
        ) : (
          <p>Not found</p>
        )}
      </>
    );
  }
}

export default App;
