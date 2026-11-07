export const GENRES = [
    { value: 'all', label: 'catalog.genres.all' },
    { value: 'RPG', label: 'catalog.genres.rpg' },
    { value: 'Action', label: 'catalog.genres.action' },
    { value: 'Приключения', label: 'catalog.genres.adventure' },
    { value: 'Инди', label: 'catalog.genres.indie' },
    { value: 'Шутер', label: 'catalog.genres.shooter' },
    { value: 'Стратегия', label: 'catalog.genres.strategy' },
];

export const SORT_OPTIONS = [
    { value: 'popularity', label: 'catalog.sorts.popularity' },
    { value: 'rating', label: 'catalog.sorts.rating' },
    { value: 'price-asc', label: 'catalog.sorts.priceAsc' },
    { value: 'price-desc', label: 'catalog.sorts.priceDesc' },
    { value: 'newest', label: 'catalog.sorts.newest' },
];

export const DEFAULT_FILTERS = {
    search: '',
    genre: 'all',
    sort: 'popularity',
    page: 1,
};

export const ITEMS_PER_PAGE = 9;