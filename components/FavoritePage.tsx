"use client";

import Cards from "@/components/Cards";
import { useFavorites } from "@/app/context/FavoritesContext";

export default function FavoritePage() {
  const { favorites, removeFavorite, isFavorite, clearFavorites } =
    useFavorites();
  const charactersArr = Object.values(favorites);

  return (
    <div className="p-10 px-16">
      <h1 className="text-3xl font-bold text-center mb-8 mt-12">
        Favorite Characters
      </h1>

      {charactersArr.length === 0 ? (
        <p className="text-center text-gray-500">No favorites yet.</p>
      ) : (
        <>
          <Cards
            results={charactersArr}
            onAddFavorite={() => {}}
            onRemoveFavorite={removeFavorite}
            isFavorite={isFavorite}
          />
          <button
            type="button"
            onClick={() => {
              if (confirm("Are you sure you want to clear all favorites?")) {
                clearFavorites();
              }
            }}
            className="block mx-auto mb-6 bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded"
          >
            Clear all Favorites
          </button>
        </>
      )}
    </div>
  );
}
