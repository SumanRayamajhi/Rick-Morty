"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

interface Character {
  id: number;
  name: string;
  image: string;
  species: string;
  status: string;
  type: string;
  gender: string;
  created: string;
  origin: { name: string; url: string };
  location: { name: string; url: string };
  episode: string;
  characters: [];
}

export default function CharactersDetailPage() {
  const params = useParams();
  const id = Array.isArray(params?.id) ? params.id[0] : params?.id;

  const [character, setCharacter] = useState<Character | null>(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      const data = await res.json();
      setCharacter(data);
    };

    if (id) {
      fetchCharacter();
    }
  }, [id]);

  if (!character) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  return (
    <div className="flex justify-center pt-20 px-4">
      <div className="w-full max-w-4xl lg:flex shadow-md gap-4 p-6 bg-white rounded-lg">
        <div>
          <Image
            src={character.image}
            alt={character.name}
            width={300}
            height={300}
            className="mx-auto rounded-sm object-cover h-full"
          />
        </div>
        <div className="text-center lg:text-start font-bold gap-2">
          <h1 className="text-3xl font-bold text-center mb-4">
            {character.name}
          </h1>
          <div className="py-7">
            <p>
              Status:
              <span
                className={`font-semibold px-1.5 py-0.5 rounded-md ${
                  character.status === "Alive"
                    ? "bg-green-500"
                    : character.status === "Dead"
                    ? "bg-red-500"
                    : "bg-gray-400"
                }`}
              >
                {character.status}
              </span>
            </p>

            <p>Species: {character.species}</p>
            <p>Type: {character.type || "Unknown"}</p>
            <p>Gender: {character.gender}</p>
            <p>Origin: {character.origin.name}</p>
            <p>Location: {character.location.name}</p>
            <p>Created: {character.created}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
