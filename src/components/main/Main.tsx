import { ICharacters } from '../../utils/types/ICharacters';
import './main.css';
import React from 'react';

type MainProps = {
  characters: ICharacters[];
};

class Main extends React.Component<MainProps> {
  render(): React.ReactNode {
    return (
      <main className="main">
        {this.props.characters.map((character) => {
          return character.name;
        })}
      </main>
    );
  }
}

export default Main;
