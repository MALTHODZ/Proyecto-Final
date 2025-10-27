import { useState, useEffect } from 'react';

export default function useBookDetails(book) {
    const [detailedBook, setDetailedBook] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBookDetails = async () => {
            try {
                const cleanId = book.id.replace('/works/', '').replace('works/', '');
                const response = await fetch(`https://openlibrary.org/works/${cleanId}.json`);
                const bookData = await response.json();

                setDetailedBook({
                    ...book,
                    description: bookData.description?.value || bookData.description || 'Sin descripción disponible',
                    subjects: bookData.subjects || []
                });
            } catch (error) {
                console.log('Error cargando detalles del libro:', error);
                setDetailedBook(book);
            } finally {
                setLoading(false);
            }
        };

        fetchBookDetails();
    }, [book]);

    return { detailedBook, loading };
}