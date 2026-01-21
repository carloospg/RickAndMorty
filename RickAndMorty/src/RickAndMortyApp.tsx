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
    handleFilterChange,
    loadMore,
    hasMore
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

      {loading && characters.length === 0 && <p className="message">Cargando...</p>}
      {error && <p className="message">No hay datos</p>}
      {!error && ( <CharacterList characters={characters} loadMore={loadMore} hasMore={hasMore} />)}
    </div>
  );
};
