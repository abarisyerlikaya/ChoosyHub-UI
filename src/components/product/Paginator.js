import React, { useState, useEffect } from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

export default function Paginator(props) {
  const [page, setPage] = useState(props.page);
  const pageCount = props.pageCount;
  const updatePage = props.updatePage;

  const getPageList = (totalPages, page, maxLength) => {
    const range = (start, end) => Array.from(Array(end - start + 1), (_, i) => i + start);
    var sideWidth = maxLength < 9 ? 1 : 2;
    var leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
    var rightWidth = (maxLength - sideWidth * 2 - 2) >> 1;
    if (totalPages <= maxLength) return range(1, totalPages);
    if (page <= maxLength - sideWidth - 1 - rightWidth)
      return range(1, maxLength - sideWidth - 1).concat(0, range(totalPages - sideWidth + 1, totalPages));
    if (page >= totalPages - sideWidth - 1 - rightWidth)
      return range(1, sideWidth).concat(0, range(totalPages - sideWidth - 1 - rightWidth - leftWidth, totalPages));
    return range(1, sideWidth).concat(
      0,
      range(page - leftWidth, page + rightWidth),
      0,
      range(totalPages - sideWidth + 1, totalPages)
    );
  };

  const [visiblePages, setVisiblePages] = useState(getPageList(pageCount, page, 7));

  const handlePageClick = (event) => {
    const id = event.currentTarget.id;

    if (id === "first") setPage(1);
    else if (id === "previous" && page !== 1) setPage(page - 1);
    else if (id === "next" && page !== pageCount) setPage(page + 1);
    else if (id === "last") setPage(pageCount);
    else if (parseInt(id) !== page) setPage(parseInt(id));
  };

  useEffect(() => {
    updatePage(page);
    setVisiblePages(getPageList(pageCount, page, 7));
  }, [page]);

  return (
      <Pagination aria-label="page-navigation" className="mt-2">
        <PaginationItem>
          <PaginationLink first id="first" onClick={handlePageClick} href="#comments-top" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink previous id="previous" onClick={handlePageClick} href="#comments-top" />
        </PaginationItem>

        {visiblePages.map((i) => {
          return (
            <PaginationItem disabled={i === 0 ? true : false} active={i === page ? true : false}>
              <PaginationLink id={i === 0 ? "disabled" : i} onClick={handlePageClick} href="#comments-top">
                {i === 0 ? "..." : i}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        <PaginationItem>
          <PaginationLink next id="next" onClick={handlePageClick} href="#comments-top" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink last id="last" onClick={handlePageClick} href="#comments-top" />
        </PaginationItem>
      </Pagination>
  );
}
