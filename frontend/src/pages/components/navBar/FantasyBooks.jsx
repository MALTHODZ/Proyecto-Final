import {useEffect, useState} from 'react'
import {getFantasyBooks} from "@/pages/api/navBar/getFantasyBooks";
import BookCard from "@/pages/components/BookCard";
import BookDetails from "@/pages/components/productView/BookDetails";

export default function FantasyBooks(){

    const [books, setBooks] = useState([])
    const [selectedBook, setSelectedBook] = useState(null)

    const fetchBooks = async () => {
        try{
            const result = await getFantasyBooks();
            setBooks(result.books);
            console.log('datos recibidos', result);
        } catch (error) {
            console.log('error con el componente',error)
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

    return(
        <div>
            <h1>Aqui se veran los libros de fantasia</h1>
            <div>
                <p>Montrando {books.length} libros</p>
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
    )
}
