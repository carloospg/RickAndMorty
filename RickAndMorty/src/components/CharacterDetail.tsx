import type { Character } from "../types";

interface Props {
  character: Character;
  onBack: () => void;
}

export const CharacterDetail = ({ character, onBack }: Props) => {
  return (
    <div className="character-detail-container">
      <button className="back-button" onClick={onBack}>
        &larr;
      </button>

      <div className="detail-card">
        <img
          src={character.image}
          alt={character.name}
          className="detail.image"
        />

        <div className="detail-info">
          <h2>{character.name}</h2>
          <div className="detail-row">
            <span className="label">Estado:</span>
            <span className="value">{character.status}</span>
          </div>
          <div className="detail-row">
            <span className="label">Especie:</span>
            <span className="value">{character.species}</span>
          </div>
          <div className="detail-row">
            <span className="label">Genero:</span>
            <span className="value">{character.gender}</span>
          </div>
          <div className="detail-row">
            <span className="label">Origen:</span>
            <span className="value">{character.origin.name}</span>
          </div>
          <div className="detail-row">
            <span className="label">Ubicacion:</span>
            <span className="value">{character.location.name}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
