import React from "react";
import ReactNextPaging from "react-next-paging";

export const PaginacionTabla = ({
  itemsperpage,
  nocolumns,
  items,
  pagesspan
}) => {
  return (
    <ReactNextPaging
      itemsperpage={itemsperpage}
      nocolumns={nocolumns}
      items={items}
      pagesspan={pagesspan}
    >
      {({
        getBackButtonProps,
        getFastBackButtonProps,
        getFwdButtonProps,
        getFastFwdButtonProps,
        getSelPageButtonProps,
        nopages,
        inipagearray,
        pagesforarray,
        currentpage,
        noitems,
        initialitem,
        lastitem,
        goBackBdisabled,
        goFastBackBdisabled,
        goFwdBdisabled,
        goFastFwdBdisabled
      }) => (
        <tbody>
          {items.slice(initialitem, lastitem).map(item => {
            return (
              <tr>
                <td>{item[0]}</td>
                <td>{item[1]}</td>
                <td>{item[2]}</td>
                <td>{item[3]}</td>
              </tr>
            );
          })}
          {noitems > 0
            ? [
                <tr key={"pagingrow" + 100}>
                  <td
                    className="table__buttons"
                    colSpan={nocolumns}
                    style={{ textAlign: "center" }}
                  >
                    <button
                      className="button__first"
                      {...getFastBackButtonProps()}
                      disabled={goFastBackBdisabled}
                    >
                      {"<<"}
                    </button>
                    <button
                      className="button__previous"
                      {...getBackButtonProps()}
                      disabled={goBackBdisabled}
                    >
                      {"<"}
                    </button>
                    {Array.from(
                      { length: pagesforarray },
                      (v, i) => i + inipagearray
                    ).map(page => {
                      return (
                        <button
                          key={page}
                          {...getSelPageButtonProps({ page: page })}
                          disabled={currentpage === page}
                        >
                          {page}
                        </button>
                      );
                    })}
                    <button
                      {...getFwdButtonProps()}
                      disabled={goFwdBdisabled}
                      className="button__forward"
                    >
                      {">"}
                    </button>
                    <button
                      className="button__last"
                      {...getFastFwdButtonProps()}
                      disabled={goFastFwdBdisabled}
                    >
                      {">>"}
                    </button>
                  </td>
                </tr>
              ]
            : null}
        </tbody>
      )}
    </ReactNextPaging>
  );
};
