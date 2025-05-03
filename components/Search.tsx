interface SearchProps {
  search: string;
  searchHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function Search({ search, searchHandler }: SearchProps) {
  const clearSearch = () => {
    const event = {
      target: { value: "" },
    } as React.ChangeEvent<HTMLInputElement>;
    searchHandler(event);
  };
  return (
    <form
      className="mb-6 flex justify-center"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="text"
        value={search}
        aria-label="Search characters..."
        placeholder="Search characters..."
        className="border p-2 rounded-md w-80"
        onChange={searchHandler}
      />
      {search && (
        <button
          type="button"
          onClick={clearSearch}
          className="ml-2 px-2 py-1 text-sm text-gray-600 border rounded-md cursor-pointer"
        >
          Clear
        </button>
      )}
    </form>
  );
}
