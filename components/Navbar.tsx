import Link from "next/link";
import React from "react";

interface Character {
  id: number;
  name: string;
  image: string;
  species: string;
  status: string;
  origin: { name: string };
}

interface NavbarProps {
  favorites: { [key: number]: Character };
}

function Navbar({ favorites }: NavbarProps) {
  return (
    <div className="h-[10vh] bg-slate-100">
      <div className="flex justify-between  px-16 py-4">
        <div>
          <h2>Ricky-Morty</h2>
        </div>
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
