import {useEffect, useState} from "react";
import {getFictionBooks} from "@/pages/api/navBar/getFictionBooks";
import BookCard from "@/pages/components/BookCard";
import BookDetails from "@/pages/components/productView/BookDetails";


export default function FictionBooks() {

    const [books, setBooks] = useState([]);
    const [selectedBook, setSelectedBook] = useState(null);

    const fetchBooks = async () => {
        try{
            const result = await getFictionBooks();
            setBooks(result.books);
            console.log('datos de ficcion recibidos', result)
        } catch (error) {
            console.log('Error con el componente',error)
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
        <>
        <h1>Aqui se veran libros de Ficcion</h1>
            <div>
                <p>Muestra de {books.length} libros</p>
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
        </>
    )
}