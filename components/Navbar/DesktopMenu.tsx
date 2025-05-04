import Link from "next/link";
import React from "react";
import FavoriteBadge from "./FavoriteBadge";

function DesktopMenu({ favoriteCount }: { favoriteCount: number }) {
  return (
    <div className="hidden md:flex items-center gap-6">
      <Link href="/" className="font-semibold">
        Home
      </Link>
      <div className="relative font-semibold">
        <Link href="/favorite" className="flex items-center space-x-1">
          <FavoriteBadge count={favoriteCount} />
          Favorite
        </Link>
      </div>
    </div>
  );
}

export default DesktopMenu;
