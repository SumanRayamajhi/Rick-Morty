import ReactPaginate from "react-paginate";

export default function Pagination({
  pageNumber,
  setPageNumber,
  totalPages,
}: {
  pageNumber: number;
  setPageNumber: (page: number) => void;
  totalPages: number;
}) {
  return (
    <div className="flex justify-center">
      <ReactPaginate
        className="flex gap-4 text-lg"
        activeClassName="font-bold underline"
        previousLabel={
          <span className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white px-2 py-1 rounded">
            Prev
          </span>
        }
        nextLabel={
          <span className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white px-2 py-1 rounded">
            Next
          </span>
        }
        forcePage={pageNumber - 1}
        pageCount={totalPages}
        onPageChange={(data) => setPageNumber(data.selected + 1)}
      />
    </div>
  );
}
