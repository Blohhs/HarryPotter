import './CharacterCard.css';

export interface ICharacter {
  id: number;
  name: string;
  actor: string;
  gender: string;
  house: string;
  wandCore: string;
  alive: string;
  image: string;
}

const CharacterCard = ({ name, actor, gender, house, wandCore, alive, image }: ICharacter) => {
  return (
    <div className="character-card">
      <img src={image} alt={name} className="character-image" />
      <div className="character-info">
        <h3>{name}</h3>
        <p><span>Actor:</span> {actor}</p>
        <p><span>Gender:</span> {gender}</p>
        <p><span>House:</span> {house}</p>
        <p><span>Wand core:</span> {wandCore}</p>
        <p><span>Alive:</span> {alive}</p>
      </div>
    </div>
  );
};

export default CharacterCard;