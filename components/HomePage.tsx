"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Character {
  id: number;
  name: string;
  image: string;
}

interface ApiRespone {
  results: Character[];
}
function HomePage() {
  const [fetchData, setFetchData] = useState<ApiRespone | null>(null);

  const api = "https://rickandmortyapi.com/api/character";

  useEffect(() => {
    getRickyAndMortyApi();
  }, []);

  const getRickyAndMortyApi = async () => {
    const response = await fetch(api);
    const data: ApiRespone = await response.json();
    setFetchData(data);
  };

  if (!fetchData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Characters</h1>
      <ul>
        {fetchData.results.map((character) => (
          <li key={character.id}>
            <h3> {character.name} </h3>
            <Image
              src={character.image}
              alt="character name"
              height={100}
              width={100}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
