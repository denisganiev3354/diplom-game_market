import { useState } from 'react';
import { Container } from '../../shared/ui/Container/Container';
import { Pagination } from '../../shared/ui/Pagination/Pagination';
import { CatalogFilters } from '../../widgets/CatalogFilters/CatalogFilters';
import { DEFAULT_FILTERS, ITEMS_PER_PAGE } from '../../widgets/CatalogFilters/constants';
import { GameGrid, mockGames, applyFilters } from '../../entities/game';

export function CatalogPage() {
    const [filters, setFilters] = useState(DEFAULT_FILTERS);

    // 1. Применяем поиск + жанр + сортировку
    const filteredGames = applyFilters(mockGames, filters);

    // 2. Считаем страницы от количества НАЙДЕННЫХ
    const totalPages = Math.ceil(filteredGames.length / ITEMS_PER_PAGE);

    // 3. Берём игры только текущей страницы
    const startIndex = (filters.page - 1) * ITEMS_PER_PAGE;
    const paginatedGames = filteredGames.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    // 4. При смене фильтров — скролл наверх
    const handleFiltersChange = (newFilters) => {
        setFilters(newFilters);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // 5. При клике на пагинацию — меняем только page
    const handlePageChange = (page) => {
        setFilters({ ...filters, page });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <section style={{ padding: '40px 0 20px', textAlign: 'center' }}>
                <Container>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: 8 }}>Каталог игр</h1>
                    <p style={{ color: 'var(--text-muted)' }}>
                        Выберите свою следующую игровую вселенную
                    </p>
                </Container>
            </section>

            <CatalogFilters
                filters={filters}
                onChange={handleFiltersChange}
                resultCount={filteredGames.length}
            />

            <section style={{ padding: '40px 0 80px' }}>
                <Container>
                    <GameGrid games={paginatedGames} />

                    {totalPages > 1 && (
                        <Pagination
                            currentPage={filters.page}
                            totalPages={totalPages}
                            onPageChange={handlePageChange}
                        />
                    )}
                </Container>
            </section>
        </>
    );
}