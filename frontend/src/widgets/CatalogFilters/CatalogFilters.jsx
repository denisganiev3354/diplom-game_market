import { Container } from "../../shared/ui/Container/Container";
import { GENRES, SORT_OPTIONS, DEFAULT_FILTERS } from "./constants";
import styles from './CatalogFilters.module.css'

export function CatalogFilters({filters, onChange, resultCount}) {

    const handleSearchChange = (e) => {
        onChange({ ...filters, search: e.target.value, page: 1});
    };

    const handleGenreChange = (e)  => {
        onChange({ ...filters, genre: e.target.value, page: 1});
    };

    const handleSortChange = (e)  => {
        onChange({ ...filters, sort: e.target.value, page: 1});
    };

    const handleReset = () => {
        onChange({ ...DEFAULT_FILTERS});
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
                        <label htmlFor="search" className={styles.label}>Поиск</label>
                        <input 
                            id="search"
                            type="text"
                            placeholder="Название игры..."
                            value={filters.search}
                            onChange={handleSearchChange}
                            className={styles.input} 
                        />
                    </div>

                    <div className={styles.group}>
                        <label htmlFor="genre" className={styles.label}>Жанр</label>
                        <select  
                            id="genre"
                            value={filters.genre}
                            onChange={handleGenreChange}
                            className={styles.select}
                        >
                            {GENRES.map((g)=>(
                                <option value={g.value} key={g.value}>{g.label}</option>
                            ))}
                        </select>
                    </div>

                    <div className={styles.group}>
                        <label htmlFor="sort" className={styles.label}>Сортировка</label>
                        <select 
                            id="sort"
                            value={filters.sort}
                            onChange={handleSortChange}
                            className={styles.select}
                        >
                            {SORT_OPTIONS.map((s) =>(
                                <option value={s.value}key={s.value}>{s.label}</option>
                            ))}
                        </select>
                    </div>

                    <div className={styles.group}>
                        <span className={styles.label}>Найдено</span>
                        <span className={styles.counter}>
                            {resultCount}{pluralGames(resultCount)}
                        </span>
                    </div>

                    {hasActiveFilters &&(
                        <button 
                            type="button"
                            onClick={handleReset}
                            className={styles.reset}
                        >
                            Сбросить
                    </button>
                    )}

                </div>
            </Container>
        </section>
    )

}

function pluralGames(n) {
    const mod10 = n %10;
    const mod100 = n % 100;
    if (mod10 === 1 && mod100 !== 11) return 'игра';
    if(mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return  'игры';
    return 'игр';
}