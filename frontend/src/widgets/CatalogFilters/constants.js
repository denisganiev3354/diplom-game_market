export const GENRES = [
    {value: 'all' ,label: 'Все жанры'},
    {value: 'RPG' ,label: 'RPG'},
    {value: 'Action' ,label: 'Action'},
    {value: 'Приключения' ,label: 'Приключения'},
    {value: 'Инди' ,label: 'Инди'},
    {value: 'Шутер' ,label: 'Шутер'},
    {value: 'Стратегия' ,label: 'Стратегия'},
];

export const SORT_OPTIONS = [
    {value: 'popularity' ,label: 'По популярности'},
    {value: 'rating' ,label: 'По рейтингу'},
    {value: 'price-asc' ,label: 'Цена по возрастанию'},
    {value: 'price-desc' ,label: 'Цена по убыванию'},
    {value: 'newest' ,label: 'Сначала новинки'},
];

export  const DEFAULT_FILTERS ={
    search: '',
    genre: 'all',
    sort: 'popularity',
    page: 1,
};

export const ITEMS_PER_PAGE = 9;  // 9 ИГР НА СТРАНИЦУ (3Х3)