import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from '../assets/css/Pagination.module.scss';

const Pagination = React.forwardRef(({ initialPage, totalPage, onPageChange }, ref) => {
  return (
    <ReactPaginate
      disableInitialCallback
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      previousLabel="ᐸ"
      nextLabel="ᐳ"
      breakLabel="..."
      initialPage={initialPage - 1}
      pageCount={totalPage}
      onPageChange={onPageChange}
      containerClassName={`${styles.paginate_wrap} second_level_blur`}
      subContainerClassName={styles.paginate_inner}
      pageClassName={styles.paginate_li}
      pageLinkClassName={styles.paginate_a}
      activeClassName={styles.paginate_active}
      nextLinkClassName={styles.paginate_next_a}
      previousLinkClassName={styles.paginate_prev_a}
      breakLinkClassName={styles.paginate_break_a}
    />
  );
});
export default Pagination;
