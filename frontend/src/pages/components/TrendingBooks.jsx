import React, { useState, useEffect } from 'react';
import { getTrendingBooks } from '../api/openLibrary';
import BookCard from "@/pages/components/BookCard";

const TrendingBooks = () => {
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
            <h1 >Prueba de Trending Books API</h1>

            <button onClick={fetchBooks}>
                Actualizar por si no cargan y ver el error por consola
            </button>

            <div>
                <h2>Libros Trending</h2>
                <p>Mostrando {books.length} libros</p>

                <div className="trending-books-grid">
                    {books.map(book => (
                        <BookCard key={book.id} book={book} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrendingBooks;