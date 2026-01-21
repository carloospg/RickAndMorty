interface Props {
  currentFilter: string;
  onFilterChange: (status: string) => void;
}

export const FilterButtons = ({ currentFilter, onFilterChange }: Props) => {
  return (
    <div className="filter-buttons-container">
      <button
        className={`filter-btn ${currentFilter === "" ? "active" : ""}`}
        onClick={() => onFilterChange("")}>
        Todos
      </button>
      <button
        className={`filter-btn ${currentFilter === "Alive" ? "active" : ""}`}
        onClick={() => onFilterChange("Alive")}>
        Vivos
      </button>
      <button
        className={`filter-btn ${currentFilter === "Dead" ? "active" : ""}`}
        onClick={() => onFilterChange("Dead")}>
        Muertos
      </button>
      <button
        className={`filter-btn ${currentFilter === "Unknown" ? "active" : ""}`}
        onClick={() => onFilterChange("Unknown")}>
        Desconocido
      </button>
    </div>
  );
};
