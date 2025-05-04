import React from "react";

function FavoriteBadge({ count }: { count: number }) {
  if (count === 0) return null;
  return (
    <span className="bg-white text-red-600 text-xs font-bold px-1.5 py-0.5 rounded-full">
      {count}
    </span>
  );
}

export default FavoriteBadge;
