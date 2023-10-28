import './App.css';
import React from 'react';
import Header from '../components/header/Header';
import Main from '../components/main/Main';
import { apiService } from '../utils/services/ApiServices';

class App extends React.Component {
  state = {
    currentCharacter: '',
    characters: [],
  };

  changeCurrentCharacter = async (character: string) => {
    this.setState({
      currentCharacter: character,
      characters: await apiService.getCurrentCharacter(character),
    });
    console.log(this.state.currentCharacter);
  };

  async componentDidMount() {
    this.setState({ characters: await apiService.getCharacters() });
    console.log(this.state);
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
