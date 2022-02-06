import React from "react";
import itempagination from "./ItemPagination.module.css"

export default function ItemPagination(props){
    const {totalPages, pageIndex, setPageIndex} = props;
    if (!totalPages) return null;
    return (
        <div className={itempagination.pagination}>
            <div className={pageIndex===0 ? itempagination.disabled + " " + itempagination.previous : itempagination.enabled + " " +itempagination.previous} onClick={() => setPageIndex(Math.max(0, pageIndex-1))}>Previous</div>

            {[...Array(totalPages).keys()].map(pageNumber =>
                <div key={pageNumber} className={pageNumber===pageIndex ? itempagination.selected + " " + itempagination.pagenumber : itempagination.notselected + " " + itempagination.pagenumber}
                     onClick={() => setPageIndex(pageNumber)}>
                    {pageNumber+1}
                </div>

            )}

            <div className={pageIndex===totalPages-1 ? itempagination.disabled + " " + itempagination.next : itempagination.enabled + " " + itempagination.next} onClick={() => setPageIndex(Math.min(totalPages-1, pageIndex+1))}>Next</div>

        </div>

    );
}



