import { useCharacters } from "./hooks/useCharacters";
import { SearchBar } from "./shared/components/SearchBar";
import { SearchHistorial } from "./components/SearchHistorial";
import { CustomHeader } from "./shared/components/CustomHeader";
import { CharacterList } from "./components/CharacterList";
import { FilterButtons } from "./shared/components/FilterButtons";

export const RickAndMortyApp = () => {
  const {
    characters,
    loading,
    error,
    handleSearch,
    previousTerms,
    handleTermClicked,
    statusFilter,
    handleFilterChange
  } = useCharacters();

  return (
    <div className="app-container">
      <CustomHeader
        title="Ricardo y Mortadelo"
        description="Busca tus personajes favoritos"
      />

      <SearchBar placeholder="Buscar personaje..." onQuery={handleSearch} />

      <SearchHistorial
        searches={previousTerms}
        onLabelClicked={handleTermClicked}
      />

      <FilterButtons currentFilter={statusFilter} onFilterChange={handleFilterChange} />

      {loading && <p className="message">Cargando...</p>}
      {error && <p className="message">No hay datos</p>}
      {!loading && !error && <CharacterList characters={characters} />}
    </div>
  );
};
