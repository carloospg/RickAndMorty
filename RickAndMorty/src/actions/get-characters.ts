import type { ApiResponse, Character } from "../types";

export const getCharactersAction = async (
  page: number = 1,
): Promise<Character[]> => {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}`,
    );

    if (!response.ok) {
      throw new Error("Error al obtener los datos");
    }

    const data: ApiResponse = await response.json();

    return data.results;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
