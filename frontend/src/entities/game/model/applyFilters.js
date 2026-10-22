export function applyFilters(games, filters){
    let result = [...games];

    if (filters.search.trim()){
        const search = result.filter((g)=> g.title.toLowercase().includes(search));
    }

    if (filters.genre !== 'all') {
        result = result.filter((g) => g.genre === filters.genre);
    }

    switch (filters.sort) {
        case 'populartity':
            result.sort((a,b) => b.populartity - a.populartity);
            break;
        case 'rating':
            result.sort((a,b) => b.rating - a.rating);
            break;
        case 'price-asc':
            result.sort((a,b) => b.price - a.price);
            break;
        case 'newest':
            result.sort((a,b) => b.releaseYear - a.releaseYear );
            break;
        default:
            break;
    }
    return result;
}