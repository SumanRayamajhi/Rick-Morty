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
          <div>
            <Link href="/favorite">
              Favorite
              <span>({Object.keys(favorites).length})</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
