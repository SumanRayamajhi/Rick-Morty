interface SearchProps {
  search: string;
  searchHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function Search({ search, searchHandler }: SearchProps) {
  return (
    <form className="mb-6 flex justify-center">
      <input
        type="text"
        value={search}
        placeholder="Search characters..."
        className="border p-2 rounded-md w-80"
        onChange={searchHandler}
      />
    </form>
  );
}
