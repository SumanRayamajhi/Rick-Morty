"use client";

import { useFavorites } from "@/app/context/FavoritesContext";
import Link from "next/link";

function Navbar() {
  const { favorites } = useFavorites();
  return (
    <div className="h-[10vh] bg-slate-100">
      <div className="flex justify-between  px-16 py-4">
        <Link href="/" className="cursor-pointer">
          <h2 className="font-bold">Ricky-Morty</h2>
        </Link>
        <div className="flex justify-center items-center gap-4">
          <div>
            <Link href="/">Home</Link>
          </div>
          <div className="relative inline-block">
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
