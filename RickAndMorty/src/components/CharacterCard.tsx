import type { Character } from "../types";

interface Props {
    character: Character;
}

export const CharacterCard = ({character}: Props) => {
    return (
        <div className="character-card">
            <img src={character.image} alt={character.name} className="character-image" />
            <h3 className="character-name">{character.name}</h3>
            <p>
                {character.status} {"-"} {character.species}
            </p>
        </div>
    )
}