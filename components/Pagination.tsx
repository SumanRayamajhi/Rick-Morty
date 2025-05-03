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
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center">
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next →"
        previousLabel="← Prev"
        containerClassName="flex flex-wrap items-center gap-2"
        pageClassName="block"
        pageLinkClassName="px-3 py-1 rounded-md hover:bg-slate-200 transition-colors cursor-pointer"
        marginPagesDisplayed={1}
        pageRangeDisplayed={2}
        previousClassName="block"
        previousLinkClassName="px-3 py-1 bg-slate-100 rounded-md hover:bg-slate-200 cursor-pointer font-semibold"
        nextClassName="block"
        nextLinkClassName="px-3 py-1 bg-slate-100 rounded-md hover:bg-slate-200 cursor-pointer font-semibold"
        activeLinkClassName="bg-slate-200 font-bold"
        breakClassName="px-2"
        forcePage={pageNumber - 1}
        pageCount={totalPages}
        onPageChange={(data) => setPageNumber(data.selected + 1)}
      />
    </div>
  );
}
