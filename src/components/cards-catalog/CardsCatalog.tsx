import './cards-catalog.css';
import React from 'react';
import HeroCard from '../hero-card/HeroCard';
import { ICharacter } from '../../utils/types/ICharacter';

type CardsCatalogProps = {
  characters: ICharacter[];
};

class CardsCatalog extends React.Component<CardsCatalogProps> {
  render(): React.ReactNode {
    return (
      <div className="catalog">
        {this.props.characters.map((character) => {
          return <HeroCard key={character.id} character={character} />;
        })}
      </div>
    );
  }
}

export default CardsCatalog;
