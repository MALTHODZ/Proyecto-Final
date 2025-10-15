import React, { useState, useEffect } from 'react';
import { getTrendingBooks } from '../api/openLibrary';

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
            <h1>Prueba de Trending Books API</h1>

            <button onClick={fetchBooks}>
                Actualizar por si no cargan y ver el error por consola
            </button>

            <div>
                <h1>Libros Trending</h1>
                <p>Mostrando {books.length} libros</p>

                <div>
                    {books.map(book => (
                        <div key={book.id}>

                            <h2>
                                {book.title}
                            </h2>

                            {book.firstPublishYear && (
                                <p>
                                    Año: {book.firstPublishYear}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrendingBooks;