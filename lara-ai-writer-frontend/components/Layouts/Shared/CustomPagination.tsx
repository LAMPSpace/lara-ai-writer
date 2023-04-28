import { useState } from "react";
import DynamicIcon from "./DynamicIcon";

const CustomPagination = () => {
    const [currentPage, setCurrentPage] = useState('1');
    const pages = ['1', '2', '3', '...', '29', '30', '31', '...', '58', '59', '60'];

    const getPageItemClassName = (page: string) => {
        if (page === "...") {
            return "page-item disabled";
        }
        if (page === currentPage) {
            return "page-item active";
        }
        return "page-item";
    }

    return (
        <ul className="pagination mb-0 py-2">
            <li className="page-item">
                <button className="page-link h-100" aria-label="First" onClick={() => setCurrentPage('1')}>
                    <span aria-hidden="true"><DynamicIcon iconName={'first-page'} iconColor={null} iconBackground={false} /></span>
                    <span className="sr-only">First</span>
                </button>
            </li>
            <li className={currentPage === "1" ? "page-item disabled" : "page-item"}>
                <button className="page-link h-100" aria-label="Previous" onClick={() => setCurrentPage((parseInt(currentPage) - 1).toString())}>
                    <span aria-hidden="true"><DynamicIcon iconName={'navigate-before'} iconColor={null} iconBackground={false} /></span>
                    <span className="sr-only">Previous</span>
                </button>
            </li>
            {pages.map((page, index) => {
                return (
                    <li className={getPageItemClassName(page)} key={'page_item_' + index}>
                        <button className="page-link h-100" aria-label={page} onClick={() => setCurrentPage(page)}>
                            <span aria-hidden="true">{page}</span>
                            <span className="sr-only">{page}</span>
                        </button>
                    </li>
                );
            })}
            <li className={currentPage === "60" ? "page-item disabled" : "page-item"}>
                <button className="page-link h-100" aria-label="Next" onClick={() => setCurrentPage((parseInt(currentPage) + 1).toString())}>
                    <span aria-hidden="true"><DynamicIcon iconName={'navigate-next'} iconColor={null} iconBackground={false} /></span>
                    <span className="sr-only">Next</span>
                </button>
            </li>
            <li className="page-item">
                <button className="page-link h-100" aria-label="Last" onClick={() => setCurrentPage('60')}>
                    <span aria-hidden="true"><DynamicIcon iconName={'last-page'} iconColor={null} iconBackground={false} /></span>
                    <span className="sr-only">Last</span>
                </button>
            </li>
        </ul>
    );
}

export default CustomPagination;