import { getPageNumbers } from './getPageNumbers';
import styles from './Pagination.module.css'

export function Pagination({ currentPage, totalPages, onPageChange }) {
    if (totalPages <=1) return null;

    const pages = getPageNumbers(currentPage, totalPages);

    const goTo = (page) => {
        if (page < 1 || page > totalPages || page === currentPage) return;
        onPageChange(page);
    };
    return(
        <nav className={styles.pagination} aria-label="Пагинация">
            <button 
                type='button'
                className={styles.arrow}
                onClick={()=> goTo(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label='Предыдущая страница'
            >
                ←
            </button>
            {pages.map((page, index) => {
                if(page === '...') {
                    return(
                        <span className={styles.dots} key={`dots-${index}`}>
                            ...
                        </span>
                    );
                }
                return(
                    <button
                        key={page}
                        type='button'
                        className={`${styles.page} ${page === currentPage ? styles.active : ''}`}
                        onClick={() => goTo(page)}
                        aria-current={page === currentPage ? 'page' : undefined}
                    >
                        {page}
                    </button>
                )
            })}

            <button
                type='button'
                className={styles.arrow}
                onClick={() => goTo(currentPage + 1)}
                disabled={currentPage === totalPages}
                aria-label='Следующая страница'

            > 
                → 
            </button>
        </nav>
    ); 
}