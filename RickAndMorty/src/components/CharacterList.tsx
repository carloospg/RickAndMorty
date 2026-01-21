import InfiniteScroll from "react-infinite-scroll-component";
import type { Character } from "../types";
import { CharacterCard } from "./CharacterCard";

interface Props {
  characters: Character[];
  loadMore: () => void;
  hasMore: boolean;
  onCharacterClick: (character: Character) => void;
}

export const CharacterList = ({ characters, loadMore, hasMore, onCharacterClick }: Props) => {
  return (

    <InfiniteScroll dataLength={characters.length} next={loadMore} hasMore={hasMore} loader={<p className="message">Cargando Más...</p>} endMessage={<p className="message">No hay mas</p>} className="character-list">

      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} onClick={() => onCharacterClick(character)}/>
      ))}
    </InfiniteScroll>

    )
};
