export function getPageNumbers(currentPage, totalPages, siblingsCount =1) {
    const totalNumbers = siblingsCount * 2 + 5;  // первая + последняя + текущая + 2 sibling + 2 ...
    if (totalPages <= totalNumbers){
        return Array.from({length: totalPages },(_, i) => i + 1);
    }

    const leftSibling = Math.max(currentPage - siblingsCount, 1);
    const rightSibling = Math.min(currentPage + siblingsCount, totalPages);

    const showLeftDots = leftSibling > 2;
    const showRightDots = rightSibling < totalPages - 1;

    const result = [];

    if (!showLeftDots && showRightDots) {
        //близко к началу:[1,2,3,4, '...', total]
        const leftRange = Array.from(
            { length: 3 + siblingsCount * 2 },
            (_, i) => i + 1
        );
        return [...leftRange, '...', totalPages];
    }

    if (showLeftDots && !showRightDots){
        // близко к концу: [1, '...', n-3, n-2, n-1, n]
        const rightRange = Array.from(
            {length: 3 + siblingsCount *2},
            (_, i) => totalPages - (3 + siblingsCount * 2 ) + 1 + i 
        );
        return [1, '...', ...rightRange];
    }

    //в середине : [1, '...', cur-1, cur, cur+1, '...', total]
    return [1, '...', leftSibling, currentPage, rightSibling, '...', totalPages];
}