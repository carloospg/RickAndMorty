import type { Character } from "../types";
import { CharacterCard } from "./CharacterCard";

interface Props {
  characters: Character[];
}

export const CharacterList = ({ characters }: Props) => {
  return (
    <div className="character-list">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
};
