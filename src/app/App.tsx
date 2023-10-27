import './App.css';
import React from 'react';
import Header from '../components/header/Header';
import Main from '../components/main/Main';

class App extends React.Component {
  constructor({}, {}) {
    super({}, {});

    this.state = [];
  }

  render(): React.ReactNode {
    return (
      <>
        <Header />
        <Main />
      </>
    );
  }
}

export default App;
