interface SearchProps {
  setSearch: (value: string) => void;
  setPageNumber: (value: number) => void;
}
export default function Search({ setSearch, setPageNumber }: SearchProps) {
  return (
    <form className="mb-6 flex justify-center">
      <input
        type="text"
        placeholder="Search characters..."
        className="border p-2 rounded-md w-80"
        onChange={(e) => {
          setPageNumber(1);
          setSearch(e.target.value);
        }}
      />
    </form>
  );
}
