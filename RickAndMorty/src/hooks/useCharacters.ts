import { useState, useEffect, useRef } from "react";
import { getCharactersAction } from "../actions/get-characters";
import type { Character } from "../types";

export const useCharacters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);
  const [nameFilter, setNameFilter] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<string>("");
  const cache = useRef<Record<string, Character[]>>({});

  const fetchCharacters = async (name: string, status: string) => {
    try {
      setLoading(true)
      setError(null)
      const data = await getCharactersAction(1, name, status)
      setCharacters(data)
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError('Error desconocido')
      }
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCharacters("","")
  }, []);

  const handleSearch = (name: string) => {
    setNameFilter(name)
    if (name && !previousTerms.includes(name)) {
      setPreviousTerms([name, ...previousTerms].slice(0, 5))
    }
    fetchCharacters(name, statusFilter)
  }

  const handleFilterChange = (status: string) => {
    setStatusFilter(status)
    fetchCharacters(nameFilter, status)
  }

  const handleTermClicked = (term: string) => {
    setNameFilter(term)
    fetchCharacters(term, statusFilter)
  }

  return {
    characters,
    loading,
    error,
    previousTerms,
    handleSearch,
    handleTermClicked,
    handleFilterChange,
    statusFilter,
  }
};
