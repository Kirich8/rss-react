import React from 'react';
import Header from '../components/header/Header';
import CardNotFound from '../components/card-not-found/CardNotFound';
import Loader from '../components/loader/Loader';
import CardsCatalog from '../components/cards-catalog/CardsCatalog';
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

  render(): React.ReactNode {
    return (
      <>
        <Header changeCurrentCharacter={this.changeCurrentCharacter} />
        <main className="main">
          {this.state.isFetching ? (
            <Loader />
          ) : this.state.characters.length ? (
            <CardsCatalog characters={this.state.characters} />
          ) : (
            <CardNotFound />
          )}
        </main>
      </>
    );
  }
}

export default App;
