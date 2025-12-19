import { useState, useEffect } from 'react';
import {fetchBookDetailsNew} from "@/pages/api/apiFetch";
import {formatSearchBook} from "@/pages/api/searchResult/formatSearchBook";

export default function useBookDetails(book) {
    const [detailedBook, setDetailedBook] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchBookDetails = async () => {
        const bookData = await fetchBookDetailsNew(book.id);
        const authorKey = bookData.authors?.at(0)?.author.key.split('/').at(-1);

        const authorResponse = await fetch(`https://openlibrary.org/authors/${authorKey}.json`);
        const author = await authorResponse.json();

        const formattedBook = formatSearchBook(bookData);

        try {
            setDetailedBook({
                ...formattedBook,
                authors: [author.name],
            });
        } catch (error) {
            console.log('Error cargando detalles del libro:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBookDetails();
    }, [book]);

    return { detailedBook, loading };
}