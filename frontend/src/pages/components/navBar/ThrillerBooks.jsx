import {useEffect, useState} from "react";
import {getThrillerBooks} from "@/pages/api/navBar/getThrillerBooks";
import BookCard from "@/pages/components/BookCard";


export default function ThrillerBooks() {

    const [books, setBooks] = useState([]);

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

    return (
        <>
            <h1>Aqui se veran los libros Thriller</h1>
            <div>
                <p>Montrando {books.length} libros</p>
                <div className="books-grid">
                    {books.map(book => (
                        <BookCard key={book.id} book={book} />
                    ))}
                </div>
            </div>
        </>
    )
}