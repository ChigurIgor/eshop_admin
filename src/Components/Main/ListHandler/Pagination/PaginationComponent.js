import styles from "./styles.module.css";
import classNames from "classnames";
import {observer} from "mobx-react";
import {useContext} from "react";
import {ProductsStoreContext} from "../../../../App";
const LEFT_PAGE = 'LEFT';
const RIGHT_PAGE = 'RIGHT';

/**
 * Helper method for creating a range of numbers
 * range(1, 5) => [1, 2, 3, 4, 5]
 */
const range = (from, to, step = 1) => {
    let i = from;
    const range = [];
    while (i <= to) {
        range.push(i);
        i += step;
    }
    return range;
}

const PaginationComponent = () => {
    const store = useContext(ProductsStoreContext);
    const {productsToShow, currentPage, pageLimit, pageNeighbours} = store;
    const totalRecords = productsToShow.length;
    const totalPages = Math.ceil(totalRecords/pageLimit);

    const fetchPageNumbers = () => {
        /**
         * totalNumbers: the total page numbers to show on the control
         * totalBlocks: totalNumbers + 2 to cover for the left(<) and right(>) controls
         */
        const totalNumbers = (pageNeighbours * 2) + 3;
        const totalBlocks = totalNumbers + 2;

        if (totalPages > totalBlocks) {
            const startPage = Math.max(2, currentPage - pageNeighbours);
            const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);
            let pages = range(startPage, endPage);

            /**
             * hasLeftSpill: has hidden pages to the left
             * hasRightSpill: has hidden pages to the right
             * spillOffset: number of hidden pages either to the left or to the right
             */
            const hasLeftSpill = startPage > 2;
            const hasRightSpill = (totalPages - endPage) > 1;
            const spillOffset = totalNumbers - (pages.length + 1);

            switch (true) {
                // handle: (1) < {5 6} [7] {8 9} (10)
                case (hasLeftSpill && !hasRightSpill): {
                    const extraPages = range(startPage - spillOffset, startPage - 1);
                    pages = [LEFT_PAGE, ...extraPages, ...pages];
                    break;
                }

                // handle: (1) {2 3} [4] {5 6} > (10)
                case (!hasLeftSpill && hasRightSpill): {
                    const extraPages = range(endPage + 1, endPage + spillOffset);
                    pages = [...pages, ...extraPages, RIGHT_PAGE];
                    break;
                }

                // handle: (1) < {4 5} [6] {7 8} > (10)
                case (hasLeftSpill && hasRightSpill):
                default: {
                    pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
                    break;
                }
            }

            return [1, ...pages, totalPages];
        }

        return range(1, totalPages);
    }

    if (!totalRecords || totalPages === 1) return null;
    const pages = fetchPageNumbers();

    const gotoPage = page => {
        store.setCurrentPage(Math.max(0, Math.min(page, totalPages)));
    }

    const handleClick = page => () => {
        gotoPage(page);
    }

    const handleMoveLeft = () => {
        gotoPage(currentPage - (pageNeighbours * 2) - 1);
    }

    const handleMoveRight = () => {
        gotoPage(currentPage + (pageNeighbours * 2) + 1);
    }

    return (
        <>
            <ul className={classNames("pagination", styles.pagination)} >
                { pages.map((page, index) => {

                    if (page === LEFT_PAGE) return (
                        <li key={index} className="page-item">
                            <div className={classNames(styles.pageLink,"page-link" )}  aria-label="Previous" onClick={handleMoveLeft}>
                                <span aria-hidden="true" className={styles.previous}>&laquo;</span>
                                <span className="sr-only">Previous</span>
                            </div>
                        </li>
                    );

                    if (page === RIGHT_PAGE) return (
                        <li key={index} className="page-item">
                            <div className={classNames(styles.pageLink, styles.next,"page-link" )} aria-label="Next" onClick={handleMoveRight}>
                                <span aria-hidden="true">&raquo;</span>
                                <span className="sr-only">Next</span>
                            </div>
                        </li>
                    );

                    return (
                        <li key={index} className={classNames(  `page-item${ currentPage === page ? ' active' : ''}`)}>
                            <div className={classNames("page-link", currentPage === page ? styles.pageLinkActive : styles.pageLink )}  onClick={ handleClick(page) }>{ page }</div>
                        </li>
                    );

                }) }

            </ul>
        </>
    );


}



export default observer(PaginationComponent);