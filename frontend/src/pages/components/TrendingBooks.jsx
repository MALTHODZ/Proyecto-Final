import { useState, useEffect } from 'react';
import { getTrendingBooks } from '../api/getTrendingBooks';
import BookCard from "@/pages/components/BookCard";

export default function TrendingBooks () {
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        try {
            const result = await getTrendingBooks();
            setBooks(result.books);
            console.log('Datos recibidos:', result);
        } catch (err) {
            console.error('Error en el componente:', err);
        }
    };

    useEffect(() => {
        fetchBooks();
    }, []);

    return (
        <div>
            <div>
                <h2>Libros Trending</h2>
                <p>Mostrando {books.length} libros</p>

                <div className="books-grid">
                    {books.map(book => (
                        <BookCard key={book.id} book={book} />
                    ))}
                </div>
            </div>
        </div>
    );
};
