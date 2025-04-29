import Link from "next/link";
import React from "react";

function Navbar() {
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
            <Link href="/favorite">Favorite</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
