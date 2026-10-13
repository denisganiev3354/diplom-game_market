import { faker } from '@faker-js/faker';


// Фиксируем seed, чтобы данные всегда были одинаковыми при перезагрузке
faker.seed(42);


// Доступные жанры с русскими названиями
const GENRES = ['RPG', 'Action', 'Приключения', 'Инди', 'Шутер', 'Стратегия'];


// Теги — добавляются к каждой игре как доп. жанры
const TAG_POOL = {
    RPG: ['Фэнтези', 'Sci-Fi', 'Постапокалипсис', 'Киберпанк', 'Мифология', 'Открытый мир'],
    Action: ['Шутер', 'Хак-н-слэш', 'Открытый мир', 'Souls-like', 'Стелс', 'Военный'],
    'Приключения': ['Квест', 'Детектив', 'Платформер', 'Головоломка', 'Космос', 'Драма'],
    'Инди' : ['Roguelike', 'Metroidvania', 'Пиксель-арт', 'Атмосферный', 'Сложный', 'Музыкальный'],
    'Шутер' : ['Мультиплеер', 'Battle Royale', 'Тактический', 'Sci-Fi', 'Военный', 'Кооператив'], 
    'Стратегия' : ['Пошаговая', 'RTS', 'Глобальная', 'Историческая', 'Фэнтези', 'Космос'],
};


// Крутые «настоящие» названия для разнообразия (смешиваются со сгенерированными)
const REAL_TITLES = [
    'Cyberpunk 2077', 'The Witcher 3', 'Red Dead Redemption 2',
    'Hollow Knight', 'Starfield', 'Elden Ring', 'Diablo IV', 'Stray',
    'God of War', 'Horizon Zero Dawn', 'Dark Souls III', 'Sekiro',
    'Control', 'Disco Elysium', "Baldur's Gate 3", 'Lies of P',
    'Atomic Heart', 'The Last of Us', 'Death Stranding', 'NieR: Automata',
    'Hades', 'Celeste', 'Outer Wilds', 'It Takes Two',
];



// Картинки-заглушки (у нас их всего 12, ротация)
const IMAGES =[
    '/images/cyberpunk2077.jpg',
    '/images/witcher3.jpg',
    '/images/rdr2.jpg',
    '/images/Hollow_Knight.jpg',
    '/images/Starfield.jpg',
    '/images/Elden_Ring.jpg',
    '/images/DiabloIV.jpg',
    '/images/Stray.jpg',
];


// Вспомогательные функции
const pick = (arr) =>faker.helpers.arrayElement(arr);
const pickMany = (arr, min, max) =>
    faker.helpers.arrayElements(arr, faker.number.int({min, max}));


// Генерация slug из названия
const toSlug = (title, id) =>
    `${title
        .toLowerCase()
        .replace(/[^a-z0-9а-я]+/gi,'-')
        .replace(/^-|-$/g, '')}-${id}`;


// Генерация одной игры
function generateGame(id){
      // Первые 24 игры — реальные названия, остальные — сгенерированные
    const title = 
    id <= REAL_TITLES.length
        ? REAL_TITLES[id - 1]            // первые 24 — из массива
        : faker.helpers.fake(            // остальные — Faker
            '{{word.adjective}} {{word.noun}} {{helpers.arrayElement([":", "-", "—"])}} {{word.noun}}'
        );

        const genre = pick(GENRES);
        const tags = pickMany(TAG_POOL[genre], 1, 2);

        const price = faker.number.int({min: 299, max: 4999 });
        const hasDiscount = faker.datatype.boolean({probability: 0.4});
        const discountPercent = hasDiscount ? faker.number.int({min: 10, max:50}) : 0;
        const oldPrice = hasDiscount ? Math.round(price /(1-discountPercent / 100)) : null;

        return{
            id,
            slug: toSlug(title, id),
            title,
            genre,
            tags,
            price,
            oldPrice,
            imageUrl: pick(IMAGES),
            rating: faker.number.float({min:3.5, max: 5.0, fractionDigits: 1}),
            releaseYear: faker.number.int({min: 2000, max: 2024}),
            popularity: faker.number.int({min: 50, max: 100}),
        };
}

// Генерируем 100 игр
export function generateGames(count=100){
    return Array.from({length: count }, (_, i)=> generateGame(i + 1));
}

export const mockGames = generateGames(100);