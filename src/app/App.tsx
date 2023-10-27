import './App.css';
import React from 'react';
import Header from '../components/header/Header';
import Main from '../components/main/Main';
import { apiService } from '../utils/services/ApiServices';

class App extends React.Component {
  state = {
    characters: [],
  };

  async componentDidMount() {
    this.setState({ characters: await apiService.getCharacters() });
  }

  render(): React.ReactNode {
    return (
      <>
        <Header />
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
