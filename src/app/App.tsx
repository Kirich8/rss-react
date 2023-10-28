import './App.css';
import React from 'react';
import Header from '../components/header/Header';
import Main from '../pages/main/Main';
import CardNotFound from '../components/card-not-found/CardNotFound';
import Loader from '../components/loader/Loader';
import { apiService } from '../utils/services/ApiServices';

class App extends React.Component {
  state = {
    characters: [],
    isFetching: true,
  };

  changeCurrentCharacter = async (character: string) => {
    this.setState({
      isFetching: true,
    });

    this.setState({
      characters: character
        ? await apiService.getCurrentCharacter(character)
        : await apiService.getCharacters(),
      isFetching: false,
    });
  };

  async componentDidMount() {
    this.setState({
      characters: await apiService.getCharacters(),
      isFetching: false,
    });
  }

  render(): React.ReactNode {
    return (
      <>
        <Header changeCurrentCharacter={this.changeCurrentCharacter} />
        {this.state.isFetching ? (
          <Loader />
        ) : this.state.characters.length ? (
          <Main characters={this.state.characters} />
        ) : (
          <CardNotFound />
        )}
      </>
    );
  }
}

export default App;
