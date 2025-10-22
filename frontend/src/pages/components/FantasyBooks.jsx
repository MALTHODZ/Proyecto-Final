import {useEffect, useState} from 'react'
import {getFantasyBooks} from "@/pages/api/getFantasyBooks";
import BookCard from "@/pages/components/BookCard";

export default function FantasyBooks(){

    const [books, setBooks] = useState([])

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

    return(
        <div>
            <h1>Aqui se veran los libros de fantasia</h1>
            <div>
                <p>Montrando {books.length} libros</p>
                <div className="books-grid">
                    {books.map(book => (
                        <BookCard key={book.id} book={book} />
                    ))}
                </div>
            </div>
        </div>
    )
}
