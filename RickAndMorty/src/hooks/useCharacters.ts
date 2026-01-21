import { useState, useEffect, useRef } from "react";
import { getCharactersAction } from "../actions/get-characters";
import type { Character } from "../types";
import { FALSE } from "sass";

export const useCharacters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);
  const [nameFilter, setNameFilter] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const fetchCharacters = async (currentPage:number, name: string, status: string, isNewSearch: boolean) => {
    try {
      if (isNewSearch) {
        setLoading(true)
      }
      setError(null)
      const newCharacters = await getCharactersAction(currentPage, name, status)

      if (isNewSearch) {
        setCharacters(newCharacters)
        setPage(1)
      } else {
        setCharacters(prev => [...prev, ...newCharacters])
      }

      if (newCharacters.length < 20) {
        setHasMore(false)
      } else {
        setHasMore(true)
      }

    } catch (err) {
      if (isNewSearch) {
        if (err instanceof Error) {
          setError(err.message)
        } else {
          setError('Error desconocido')
        }
      } else {
        setHasMore(false)
      }
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCharacters(1, "", "", true)
  }, []);

  const loadMore = () => {
    const nextPage = page + 1
    setPage(nextPage)
    fetchCharacters(nextPage, nameFilter, statusFilter, false)
  }

  const handleSearch = (name: string) => {
    setNameFilter(name)
    if (name && !previousTerms.includes(name)) {
      setPreviousTerms([name, ...previousTerms].slice(0, 5))
    }
    fetchCharacters(1, name, statusFilter, true)
  }

  const handleFilterChange = (status: string) => {
    setStatusFilter(status)
    fetchCharacters(1, nameFilter, status, true)
  }

  const handleTermClicked = (term: string) => {
    setNameFilter(term)
    fetchCharacters(1, term, statusFilter, true)
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
    loadMore,
    hasMore
  }
};
