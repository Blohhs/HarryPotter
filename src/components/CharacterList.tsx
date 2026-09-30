import CharacterCard, { type ICharacter } from './CharacterCard';
import './CharacterList.css';

const mockCharacters: ICharacter[] = [
  {
    id: 1,
    name: 'Hermione Granger',
    actor: 'Emma Watson',
    gender: 'female',
    house: 'Gryffindor',
    wandCore: 'dragon heartstring',
    alive: 'yes',
    image: 'https://placehold.co/300x400/eeeeee/31343C?text=Hermione',
  },
  {
    id: 2,
    name: 'Draco Malfoy',
    actor: 'Tom Felton',
    gender: 'male',
    house: 'Slytherin',
    wandCore: 'unicorn tail-hair',
    alive: 'yes',
    image: 'https://placehold.co/300x400/eeeeee/31343C?text=Draco',
  },
  {
    id: 3,
    name: 'Hermione Granger',
    actor: 'Emma Watson',
    gender: 'female',
    house: 'Gryffindor',
    wandCore: 'dragon heartstring',
    alive: 'yes',
    image: 'https://placehold.co/300x400/eeeeee/31343C?text=Hermione',
  },
];

const CharacterList = () => {
  return (
    <div className="character-grid">
      {mockCharacters.map((char) => (
        <CharacterCard key={char.id} {...char} />
      ))}
    </div>
  );
};

export default CharacterList;