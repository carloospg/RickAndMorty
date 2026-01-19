import { useState, useEffect, useRef } from "react";
import { getCharactersAction } from "../actions/get-characters";
import type { Character } from "../types";

export const useCharacters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const cache = useRef<Record<string, Character[]>>({});

  useEffect(() => {
    const loadInitialData = async () => {
      try {
        setLoading(true);
        const data = await getCharactersAction();
        setCharacters(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Error desconocido");
        }
      } finally {
        setLoading(false);
      }
    };
    loadInitialData();
  }, []);
  return {
    characters,
    loading,
    error,
  }
};
