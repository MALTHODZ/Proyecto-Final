const getCoverUrlFromSearch = (book) => {
    if (book.cover_i) {
        return `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;
    }

    if (book.covers?.at(0)) {
        return `https://covers.openlibrary.org/b/id/${book.covers.at(0)}-M.jpg`;
    }

    return undefined;
};

export const formatSearchBook = (book) => {
    return {
        id: book.key.split('/').at(-1),
        title: book.title,
        authors: book.author_name ?? [],
        firstPublishYear: book.first_publish_year,
        cover: getCoverUrlFromSearch(book),
    };
};