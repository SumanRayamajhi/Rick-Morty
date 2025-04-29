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

  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

  useEffect(() => {
    const fetchDataFromApi = async () => {
      setLoading(true);
      try {
        const res = await fetch(api);
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

    fetchDataFromApi();
  }, [pageNumber, search]);

  if (loading) return <div className="text-center py-10">Loading...</div>;

  if (error)
    return (
      <div className="text-center text-red-500 font-bold py-10">
        No Characters Found 😔
      </div>
    );

  return (
    <main className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-10">
        Rick and Morty Characters
      </h1>

      <Search setSearch={setSearch} setPageNumber={setPageNumber} />

      <Cards results={fetchData?.results || []} />
      <Pagination
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        totalPages={fetchData?.info.pages || 1}
      />
    </main>
  );
}
