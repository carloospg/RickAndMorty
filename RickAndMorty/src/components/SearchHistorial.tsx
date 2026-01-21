import type { FC } from "react";

interface Props {
  searches: string[];
  onLabelClicked: (term: string) => void;
}

export const SearchHistorial: FC<Props> = ({ searches, onLabelClicked }) => {
  if (searches.length === 0) return null;

  return (
    <div className="search-historial">
      <ul className="search-historial-list">
        {searches.map((term, index) => (
          <li key={`${term}-${index}`} onClick={() => onLabelClicked(term)}>
            {term}
          </li>
        ))}
      </ul>
    </div>
  );
};
