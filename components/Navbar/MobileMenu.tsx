import Link from "next/link";
import React from "react";
import FavoriteBadge from "./FavoriteBadge";

function MobileMenu({
  setMenuOpen,
  favoriteCount,
}: {
  setMenuOpen: (v: boolean) => void;
  favoriteCount: number;
}) {
  return (
    <div className="absolute top-full left-0 w-full bg-slate-100 shadow-md z-10 md:hidden px-6 pb-4 flex flex-col justify-center items-center gap-4 transition-all duration-500">
      <Link
        href="/"
        className="font-semibold hover:text-blue-500"
        onClick={() => setMenuOpen(false)}
      >
        Home
      </Link>
      <Link
        href="/favorite"
        className="font-semibold hover:text-blue-500 flex items-center gap-2 "
        onClick={() => setMenuOpen(false)}
      >
        Favorite
        <FavoriteBadge count={favoriteCount} />
      </Link>
    </div>
  );
}

export default MobileMenu;
