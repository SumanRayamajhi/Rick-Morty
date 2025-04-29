import Image from "next/image";
import Link from "next/link";

interface Character {
  id: number;
  name: string;
  image: string;
  species: string;
  status: string;
  origin: { name: string };
}

export default function Cards({ results }: { results: Character[] }) {
  return (
    <div className="grid gap-28 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-30 mb-30">
      {results.map((character) => (
        <Link
          href={`/characters-detail/${character.id}`}
          key={character.id}
          className="bg-white shadow-md border-1 border-slate-300 rounded-lg hover:scale-105 transition flex flex-col justify-center items-center"
        >
          <Image
            src={character.image}
            alt={character.name}
            width={200}
            height={200}
            className="rounded-full mt-[-4rem]"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold">{character.name}</h2>
            <p className="text-gray-600">{character.origin.name}</p>
            <p
              className={`font-semibold ${
                character.status === "Alive"
                  ? "text-green-500"
                  : character.status === "Dead"
                  ? "text-red-500"
                  : "text-gray-400"
              }`}
            >
              {character.status}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
