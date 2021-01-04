import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { useLocation, useHistory } from "react-router-dom";

export default function Paginator(props) {
  const page = props.page;
  const pageCount = props.pageCount;

  const { pathname, search } = useLocation();
  const params = new URLSearchParams(search);
  const history = useHistory();

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

  const goToPage = (event) => {
    const id = event.currentTarget.id;

    if (id === "first") params.set("page", 1);
    else if (id === "previous" && page !== 1) params.set("page", page - 1);
    else if (id === "next" && page !== pageCount) params.set("page", page + 1);
    else if (id === "last") params.set("page", pageCount);
    else if (!isNaN(id)) params.set("page", id);

    history.push(pathname + "?" + params.toString());
  };

  return (
    <Pagination size="sm" aria-label="page-navigation" className="mt-2">
      <PaginationItem>
        <PaginationLink first id="first" onClick={goToPage} />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink previous id="previous" onClick={goToPage} />
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
              <PaginationLink id={i} onClick={goToPage}>
                {i}
              </PaginationLink>
            </PaginationItem>
          );
        return (
          <PaginationItem>
            <PaginationLink id={i} onClick={goToPage}>
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      })}

      <PaginationItem>
        <PaginationLink next id="next" onClick={goToPage} />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink last id="last" onClick={goToPage} />
      </PaginationItem>
    </Pagination>
  );
}
