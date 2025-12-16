import { useState, useEffect } from 'react';
import { getTrendingBooks } from '../../api/homePage/getTrendingBooks';
import BookCard from "@/pages/components/BookCard";
import BookDetails from "@/pages/components/productView/BookDetails";
import MainLayout from "@/pages/layouts/main-layout";
import Link from 'next/link';

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
        <MainLayout>
            <nav className="navbar">
                <Link className="navbar-text" href="/components/navBar/FantasyBooks"> Libros de Fantasia</Link>
                <Link className="navbar-text" href="/components/navBar/FictionBooks"> Libros de Ficcion</Link>
                <Link className="navbar-text" href="/components/navBar/ThrillerBooks"> Libros de Thriller</Link>
                <Link href="/components/searchResult/ButtonSearch" className="btn btn-primary" > Buscar </Link>
            </nav>

            <h2 className="text-title-category">Libros Trending del mes</h2>

            <div className="books-grid">
                {books.map(book => (
                    <BookCard
                        key={book.id}
                        book={book}
                        viewDetails={() => setSelectedBook(book)}
                    />
                ))}
            </div>
        </MainLayout>
    );
};