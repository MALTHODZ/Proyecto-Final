const getCoverUrlFromSearch = (book) => {
    if (book.cover_i) {
        return `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;
    }

    if (book.covers?.at(0)) {
        return `https://covers.openlibrary.org/b/id/${book.covers.at(0)}-M.jpg`;
    }

    if (book.cover_id) {
        return `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`;
    }

    return undefined;
};

export const formatSearchBook = (book) => {
    console.log(book);
    return {
        id: book.key.split('/').at(-1),
        title: book.title,
        authors: book.author_name ?? [],
        firstPublishYear: book.first_publish_year,
        cover: getCoverUrlFromSearch(book),
        description: book.description?.value,
    };
};