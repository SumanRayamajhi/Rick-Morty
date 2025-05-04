"use client";

import { useFavorites } from "@/app/context/FavoritesContext";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

function Navbar() {
  const { favorites } = useFavorites();
  const [menuOpen, setMenuOpen] = useState(false);
  const favoriteCount = Object.keys(favorites).length;

  return (
    <div className="h-[10vh] bg-slate-100 fixed top-0 w-full z-50 shadow-sm">
      <div className="flex justify-between items-center px-16 h-full">
        <Link href="/" className="cursor-pointer">
          <h2 className="font-bold text-lg">Rick-Morty</h2>
        </Link>

        <DesktopMenu favoriteCount={favoriteCount} />

        <button
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className="flex md:hidden text-black cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={23} />}
        </button>

        {menuOpen && (
          <MobileMenu setMenuOpen={setMenuOpen} favoriteCount={favoriteCount} />
        )}
      </div>
    </div>
  );
}

export default Navbar;
