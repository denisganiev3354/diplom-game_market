import { useTranslation } from 'react-i18next';
import { Container } from '../../shared/ui/Container/Container';
import { GENRES, SORT_OPTIONS, DEFAULT_FILTERS } from './constants';
import styles from './CatalogFilters.module.css';

export function CatalogFilters({ filters, onChange, resultCount }) {
    const { t } = useTranslation();

    const handleSearchChange = (e) => {
        onChange({ ...filters, search: e.target.value, page: 1 });
    };

    const handleGenreChange = (e) => {
        onChange({ ...filters, genre: e.target.value, page: 1 });
    };

    const handleSortChange = (e) => {
        onChange({ ...filters, sort: e.target.value, page: 1 });
    };

    const handleReset = () => {
        onChange({ ...DEFAULT_FILTERS });
    };

    const hasActiveFilters =
        filters.search !== '' ||
        filters.genre !== 'all' ||
        filters.sort !== 'popularity';

    return (
        <section className={styles.filters}>
            <Container>
                <div className={styles.inner}>
                    <div className={styles.group}>
                        <label htmlFor="search" className={styles.label}>{t('catalog.search')}</label>
                        <input
                            id="search"
                            type="text"
                            placeholder={t('catalog.searchPlaceholder')}
                            value={filters.search}
                            onChange={handleSearchChange}
                            className={styles.input}
                        />
                    </div>

                    <div className={styles.group}>
                        <label htmlFor="genre" className={styles.label}>{t('catalog.genre')}</label>
                        <select
                            id="genre"
                            value={filters.genre}
                            onChange={handleGenreChange}
                            className={styles.select}
                        >
                            {GENRES.map((g) => (
                                <option key={g.value} value={g.value}>{t(g.label)}</option>
                            ))}
                        </select>
                    </div>

                    <div className={styles.group}>
                        <label htmlFor="sort" className={styles.label}>{t('catalog.sort')}</label>
                        <select
                            id="sort"
                            value={filters.sort}
                            onChange={handleSortChange}
                            className={styles.select}
                        >
                            {SORT_OPTIONS.map((s) => (
                                <option key={s.value} value={s.value}>{(t(s.label))}</option>
                            ))}
                        </select>
                    </div>

                    <div className={styles.group}>
                        <span className={styles.label}>{t('catalog.found')}</span>
                        <span className={styles.counter}>
                            {resultCount} {t('catalog.games')}
                        </span>
                    </div>

                    {hasActiveFilters && (
                        <button
                            type="button"
                            onClick={handleReset}
                            className={styles.reset}
                        >
                            {t('catalog.reset')}
                        </button>
                    )}
                </div>
            </Container>
        </section>
    );
}