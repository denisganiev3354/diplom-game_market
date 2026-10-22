import { useState } from 'react';
import { Container } from '../../shared/ui/Container/Container';
import { CatalogFilters } from '../../widgets/CatalogFilters/CatalogFilters';
import { DEFAULT_FILTERS, ITEMS_PER_PAGE } from '../../widgets/CatalogFilters/constants';

import { mockGames } from '../../entities/game';


export function CatalogPage() {
    const [filters, setFilters] = useState(DEFAULT_FILTERS);

    const totalPages = Math.cell(mockGames.length / ITEMS_PER_PAGE);

    const handlePageChange = (page) => {
        setFilters({ ...filters, page });
        window.scrollTo({ top: 0, behavior: 'smooth'});
    };

    return (
        <>
            <section style={{padding: '40px 0 20px', textAlign: 'center'}}>
                <Container>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: 8}} >Каталог игр</h1>
                    <p style={{color: 'var(--text-muted)'}}>
                        Выберите свою следующую игровую вселенную
                    </p>
                </Container>
            </section>

            <CatalogFilters
                filters={filters}
                onChange={setFilters}
                resultCount={mockGames.length}
            />

            <section style={{padding: '40px 0 80px'}}>
                <Container>
                    <p style={{color: 'var(--text-muted)'}}>
                        Текущие фильтры: {JSON.stringify(filters)}
                    </p>
                </Container>
            </section>
            <section className={{padding: '0 0 60px'}}>
                <Container>
                    <Pagination 
                        currentPage={filters.page}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                </Container>
            </section>
        </>
    );
}