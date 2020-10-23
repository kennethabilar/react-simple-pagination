import React from 'react';

const Pagination = ({ currentPage, postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <ul className="pagination mt-2">
            { pageNumbers.map(pageNumber => (
                <li className={'page-item ' + (pageNumber === currentPage ? 'active' : '')} key={pageNumber}>
                    <a href="#" className="page-link" onClick={() => paginate(pageNumber)}>{pageNumber}</a>
                </li>
            )) }
        </ul>
    );
}

export default Pagination;
