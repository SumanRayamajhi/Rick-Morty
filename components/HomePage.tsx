"use client";

import { useState, useEffect } from "react";
import Cards from "@/components/Cards";
import Search from "@/components/Search";
import Pagination from "@/components/Pagination";

interface Character {
  id: number;
  name: string;
  image: string;
  species: string;
  status: string;
  origin: { name: string };
}

interface ApiResponse {
  info: { pages: number };
  results: Character[];
}

export default function HomePage() {
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState("");
  const [fetchData, setFetchData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchDataFromApi = async () => {
    setLoading(true);
    let url = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;
    if (search !== "") {
      url += `&name=${search}`;
    }
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Not Found");
      }
      const data: ApiResponse = await res.json();
      setFetchData(data);
      setError(false);
    } catch (err) {
      if (err instanceof Error) {
        console.error(err.message);
      }
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      setLoading(true);
      fetchDataFromApi();
    }, 300);
    return () => clearTimeout(delayDebounce);
  }, [pageNumber, search]);

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setPageNumber(1);
  };

  return (
    <main className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-10">
        Rick and Morty Characters
      </h1>

      <Search search={search} searchHandler={searchHandler} />

      {loading && (
        <div className="text-center py-4 text-gray-500">Loading...</div>
      )}

      {!loading && error && (
        <div className="text-center text-red-500 font-bold py-10">
          No Characters Found 😔
        </div>
      )}

      {!loading && !error && (
        <>
          <Cards results={fetchData?.results || []} />
          <Pagination
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
            totalPages={fetchData?.info.pages || 1}
          />
        </>
      )}
    </main>
  );
}
