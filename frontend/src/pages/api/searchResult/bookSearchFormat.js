import { imageCover } from "@/pages/utils/imageCover";

const getCoverUrlFromSearch = (book) => {
    if (book.cover_i) {
        return `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;
    }
    return imageCover;
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