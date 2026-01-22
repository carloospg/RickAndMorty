import { render, screen } from "@testing-library/react";
import { CharacterCard } from "../../components/CharacterCard";
import type { Character } from "../../types";

describe("Pruebas en <CharacterCard />", () => {
  const character: Character = {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    gender: "Male",
    origin: { name: "Earth", url: "" },
    location: { name: "Earth", url: "" },
  };

  const onCharacterClick = vi.fn();

  test("debe renderizare correctamente", () => {
    const { container } = render(
      <CharacterCard character={character} onClick={onCharacterClick} />,
    );
    expect(container).toBeTruthy();
  });

  test("mostrar la imagen con el URL y el ALT indicado", () => {
    render(<CharacterCard character={character} onClick={onCharacterClick} />);

    const { src, alt } = screen.getByRole("img") as HTMLImageElement;
    expect(src).toBe(character.image);
    expect(alt).toBe(character.name);
  });

  test("mostrar el nombre del personaje", () => {
    render(<CharacterCard character={character} onClick={onCharacterClick} />);
    expect(screen.getByText(character.name)).toBeTruthy();
  });
});
