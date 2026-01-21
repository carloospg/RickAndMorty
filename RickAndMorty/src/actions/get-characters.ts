import type { ApiResponse, Character } from "../types";

export const getCharactersAction = async (
  page: number = 1,
  name: string = "",
  status: string = "",
): Promise<Character[]> => {
  try {
    const params = new URLSearchParams();
    params.append("page", page.toString());

    if (name) {
      params.append("name", name);
    }

    if (status) {
      params.append("status", status);
    }

    const response = await fetch(
      `https://rickandmortyapi.com/api/character?${params.toString()}`,
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
