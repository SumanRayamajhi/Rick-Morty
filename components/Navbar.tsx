"use client";

import { useFavorites } from "@/app/context/FavoritesContext";
import Link from "next/link";

function Navbar() {
  const { favorites } = useFavorites();
  return (
    <div className="h-[10vh] bg-slate-100 fixed w-full z-20">
      <div className="flex justify-between  px-16 py-4">
        <div>
          <h2>Ricky-Morty</h2>
        </div>
        <div className="flex justify-center items-center gap-4">
          <div>
            <Link href="/">Home</Link>
          </div>
          <div className="relative inline-block">
            <Link href="/favorite" className="flex items-center space-x-1">
              Favorite
              {Object.keys(favorites).length > 0 && (
                <span className="absolute -top-2 -right-5 bg-white text-red-600 text-xs font-bold px-2 py-0.5 rounded-full border-red-600">
                  {Object.keys(favorites).length}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
