import { useCharacters } from "./hooks/useCharacters"
import { SearchBar } from "./shared/SearchBar";
import { CustomHeader } from "./shared/CustomHeader";
import { CharacterList } from "./components/CharacterList";

export const RickAndMortyApp = () => {
  const { characters, loading, error } = useCharacters();

  return (
    <div className="app-container">
      <CustomHeader title="Ricardo y Mortadelo" description="Busca tus personajes favoritos" />

      <SearchBar placeholder="Buscar personaje..." onQuery={(value) => console.log(value)} />

        {loading && <p className="message"></p>}
        {error && <p className="message-error"></p>}
        {!loading && !error && (
          <CharacterList characters={characters} />
        )}
    </div>
  )
}
