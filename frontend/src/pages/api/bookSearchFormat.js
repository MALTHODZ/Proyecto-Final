const PLACEHOLDER_COVER = 'https://via.placeholder.com/180x270?text=Sin+portada';

const getCoverUrlFromSearch = (book) => {
    if (book.cover_i) {
        return `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;
    }
    return PLACEHOLDER_COVER;
};

export const formatSearchBook = (book) => {
    return {
        id: book.key,
        title: book.title,
        author: book.author_name?.[0] || 'Autor desconocido',
        authors: book.author_name || [],
        firstPublishYear: book.first_publish_year,
        cover: getCoverUrlFromSearch(book),
        isbn: book.isbn?.[0],
    };
};