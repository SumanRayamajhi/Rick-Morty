"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface Character {
  id: number;
  name: string;
  image: string;
  species: string;
  status: string;
  origin: { name: string };
}

interface FavoritesContextType {
  favorites: { [key: number]: Character };
  addFavorite: (char: Character) => void;
  removeFavorite: (id: number) => void;
  clearFavorites: () => void;
  isFavorite: (id: number) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | null>(null);

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context)
    throw new Error("useFavorites must be used within FavoritesProvider");
  return context;
}

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<{ [key: number]: Character }>({});

  useEffect(() => {
    const saved = localStorage.getItem("rick-morty-favorites");
    if (saved) {
      setFavorites(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("rick-morty-favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (char: Character) => {
    setFavorites((prev) => ({ ...prev, [char.id]: char }));
  };

  const removeFavorite = (id: number) => {
    setFavorites((prev) => {
      const updated = { ...prev };
      delete updated[id];
      return updated;
    });
  };

  const isFavorite = (id: number) => id in favorites;

  const clearFavorites = () => {
    setFavorites({});
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite,
        clearFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}
