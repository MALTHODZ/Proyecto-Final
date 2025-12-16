import {useEffect, useState} from "react";
import {getThrillerBooks} from "@/pages/api/navBar/getThrillerBooks";
import BookCard from "@/pages/components/BookCard";
import BookDetails from "@/pages/components/productView/BookDetails";
import MainLayout from "@/pages/layouts/main-layout";


export default function ThrillerBooks() {

    const [books, setBooks] = useState([]);
    const [selectedBook, setSelectedBook] = useState(null);

    const fetchBooks = async () => {
        try{
            const result = await getThrillerBooks();
            setBooks(result.books);
            console.log('datos recibidos',result);
        } catch (error) {
            console.log('error con el componente thrillerbooks',error);
        }
    }

    useEffect(() => {
        fetchBooks();
    },[])

    if (selectedBook) {
        return(
            <BookDetails
                book={selectedBook}
                onBack={() => setSelectedBook(null)}
            />
        )
    }

    return (
        <MainLayout>
            <h2 className="text-title-category">Libros de Thriller</h2>
            <button onClick={() => window.history.back()} className="button-back btn-center">Volver</button>
            <div className="books-grid">
                {books.map(book => (
                    <BookCard
                        key={book.id}
                        book={book}
                        viewDetails={() => setSelectedBook(book)} />
                ))}
            </div>
        </MainLayout>
    )
}