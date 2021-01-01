import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { useLocation } from "react-router-dom";

export default function Paginator(props) {
  const page = props.page;
  const pageCount = props.pageCount;

  const url = (useLocation().pathname + useLocation().search).split("&page=")[0];

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

  const visiblePages = getPageList(pageCount, page, 7);

  return (
    <Pagination aria-label="page-navigation"  className="mt-2">
      <PaginationItem>
        <PaginationLink first href={`${url}&page=1`} />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink previous href={`${url}&page=${page - 1}`} />
      </PaginationItem>

      {visiblePages.map((i) => {
        if (i === 0)
          return (
            <PaginationItem disabled>
              <PaginationLink>...</PaginationLink>
            </PaginationItem>
          );
        if (i === page)
          return (
            <PaginationItem active>
              <PaginationLink href={`${url}&page=${i}`}>{i}</PaginationLink>
            </PaginationItem>
          );
        return (
          <PaginationItem>
            <PaginationLink href={`${url}&page=${i}`}>{i}</PaginationLink>
          </PaginationItem>
        );
      })}

      <PaginationItem>
        <PaginationLink next href={`${url}&page=${page + 1}`} />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink last href={`${url}&page=${pageCount}`} />
      </PaginationItem>
    </Pagination>
  );
}
