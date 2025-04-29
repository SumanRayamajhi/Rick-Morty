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
        previousLabel="Prev"
        nextLabel="Next"
        forcePage={pageNumber - 1}
        pageCount={totalPages}
        onPageChange={(data) => setPageNumber(data.selected + 1)}
      />
    </div>
  );
}
