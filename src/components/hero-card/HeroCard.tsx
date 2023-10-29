import React from 'react';
import { ICharacter } from '../../utils/types/ICharacter';
import './hero-card.css';

type HeroCardProps = {
  character: ICharacter;
};

class HeroCard extends React.Component<HeroCardProps> {
  render(): React.ReactNode {
    return (
      <div className="herocard" key={this.props.character.id}>
        <div className="herocard__image">
          <img
            src={`${this.props.character.thumbnail.path}.${this.props.character.thumbnail.extension}`}
            alt="Hero"
          />
        </div>
        <div className="herocard__info info">
          <p className="info__name">{this.props.character.name}</p>
        </div>
      </div>
    );
  }
}

export default HeroCard;
