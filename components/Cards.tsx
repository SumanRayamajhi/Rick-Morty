import Image from "next/image";
import Link from "next/link";
import { FaHeart, FaRegHeart } from "react-icons/fa";

interface Character {
  id: number;
  name: string;
  image: string;
  species: string;
  status: string;
  origin: { name: string };
}

interface CardsProps {
  results: Character[];
  onAddFavorite: (char: Character) => void;
  onRemoveFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
}

export default function Cards({
  results,
  isFavorite,
  onAddFavorite,
  onRemoveFavorite,
}: CardsProps) {
  return (
    <div className="grid gap-28 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-30 mb-30">
      {results.map((character) => (
        <div
          key={character.id}
          className="bg-white shadow-md border-1 border-slate-300 rounded-lg hover:scale-105 transition flex flex-col justify-center items-center"
        >
          <Link
            href={`/characters-detail/${character.id}`}
            className="flex flex-col items-center"
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

          <div className="pb-4">
            {isFavorite(character.id) ? (
              <button onClick={() => onRemoveFavorite(character.id)}>
                <p className="flex text-gray-600">
                  Added to Favorite:{" "}
                  <span className="ml-2 cursor-pointer relative top-1">
                    <FaHeart color="red" className="" />
                  </span>
                </p>
              </button>
            ) : (
              <button onClick={() => onAddFavorite(character)}>
                <p className="flex text-gray-600">
                  Add to Favorite:
                  <span className="ml-2  cursor-pointer relative top-1">
                    <FaRegHeart className="" />
                  </span>
                </p>
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
