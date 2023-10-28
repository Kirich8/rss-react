import './main.css';
import React from 'react';
import HeroCard from '../../components/hero-card/HeroCard';
import { ICharacter } from '../../utils/types/ICharacter';

type MainProps = {
  characters: ICharacter[];
};

class Main extends React.Component<MainProps> {
  render(): React.ReactNode {
    return (
      <main className="main">
        <div className="main__content">
          {this.props.characters.map((character) => {
            return <HeroCard key={character.id} character={character} />;
          })}
        </div>
      </main>
    );
  }
}

export default Main;
