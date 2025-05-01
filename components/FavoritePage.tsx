"use client";

import React from "react";
import { Container } from "react-bootstrap";
import Cards from "@/components/Cards";
import { useFavorites } from "@/app/context/FavoritesContext";

export default function FavoritePage() {
  const { favorites, removeFavorite, isFavorite } = useFavorites();
  const charactersArr = Object.values(favorites);

  return (
    <Container className="p-10 px-16">
      <h1 className="text-3xl font-bold text-center mb-8 mt-12">
        Favorite Characters
      </h1>

      {charactersArr.length === 0 ? (
        <p className="text-center text-gray-500">No favorites yet.</p>
      ) : (
        <Cards
          results={charactersArr}
          onAddFavorite={() => {}}
          onRemoveFavorite={removeFavorite}
          isFavorite={isFavorite}
        />
      )}
    </Container>
  );
}
