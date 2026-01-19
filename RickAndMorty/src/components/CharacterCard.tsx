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
                <span className={`status-indicator status-${character.status.toLowerCase()}`}>
                    {character.status}
                </span>
                {"-"} {character.species}
            </p>
        </div>
    )
}