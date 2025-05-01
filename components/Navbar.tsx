"use client";

import { useFavorites } from "@/app/context/FavoritesContext";
import Link from "next/link";

function Navbar() {
  const { favorites } = useFavorites();
  return (
    <div className="h-[10vh] bg-slate-100 fixed top-0 w-full z-50">
      <div className="flex justify-between items-center px-16 h-full">
        <Link href="/" className="cursor-pointer">
          <h2 className="font-bold text-lg">Rick-Morty</h2>
        </Link>
        <div className="flex justify-center items-center gap-4">
          <div className="flex items-center gap-4">
            <Link href="/" className="font-semibold">
              Home
            </Link>
          </div>
          <div className="relative font-semibold">
            <Link href="/favorite" className="flex items-center space-x-1">
              {Object.keys(favorites).length > 0 && (
                <span className="absolute -top-1 -right-5 bg-white text-red-600 text-xs font-bold px-1.5 py-0.5 rounded-full">
                  {Object.keys(favorites).length}
                </span>
              )}
              Favorite
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
