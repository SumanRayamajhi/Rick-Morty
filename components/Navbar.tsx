"use client";

import { useFavorites } from "@/app/context/FavoritesContext";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const { favorites } = useFavorites();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="h-[10vh] bg-slate-100 fixed top-0 w-full z-50 shadow-sm">
      <div className="flex justify-between items-center px-16 h-full">
        <Link href="/" className="cursor-pointer">
          <h2 className="font-bold text-lg">Rick-Morty</h2>
        </Link>

        <div className="hidden md:flex items-center gap-6">
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

        <button
          className="flex md:hidden text-black cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={23} />}
          {menuOpen && (
            <div className="absolute top-full left-0 w-full bg-slate-100 shadow-md z-10 md:hidden px-6 pb-4 flex flex-col justify-center items-center gap-4 transition-all duration-500">
              <Link href="/" className="font-semibold hover:text-blue-500">
                Home
              </Link>
              <Link
                href="/favorite"
                className="font-semibold hover:text-blue-500 flex items-center gap-2"
              >
                Favorite
                {Object.keys(favorites).length > 0 && (
                  <span className="bg-white text-red-600 text-xs font-bold px-1.5 py-0.5 rounded-full">
                    {Object.keys(favorites).length}
                  </span>
                )}
              </Link>
            </div>
          )}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
