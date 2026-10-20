import { useState } from 'react';
import { Container } from '../../shared/ui/Container/Container';
import { CatalogFilters } from '../../widgets/CatalogFilters/CatalogFilters';
import { DEFAULT_FILTERS } from '../../widgets/CatalogFilters/constants';
import { mockGames } from '../../entities/game';

export function CatalogPage() {
    const [filters, setFilters] = useState(DEFAULT_FILTERS);

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
        </>
    );
}