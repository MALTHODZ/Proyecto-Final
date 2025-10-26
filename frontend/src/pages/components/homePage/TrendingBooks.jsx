import { useState, useEffect } from 'react';
import { getTrendingBooks } from '../../api/homePage/getTrendingBooks';
import BookCard from "@/pages/components/BookCard";
import BookDetails from "@/pages/components/productView/BookDetails";

export default function TrendingBooks () {
    const [books, setBooks] = useState([]);
    const [selectedBook, setSelectedBook] = useState(null);

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

    if (selectedBook) {
        return (
            <BookDetails
                book={selectedBook}
                onBack={() => setSelectedBook(null)}
            />
        );
    }

    return (
        <div>
            <div>
                <h2>Libros Trending</h2>
                <p>Mostrando {books.length} libros</p>

                <div className="books-grid">
                    {books.map(book => (
                        <BookCard
                            key={book.id}
                            book={book}
                            viewDetails={() => setSelectedBook(book)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};