import {useState} from "react";
import {fetchSearchBooks} from "@/pages/api/apiFetch";
import {formatSearchBook} from "@/pages/api/bookSearchFormat";


export default function BookSearch() {

    const [search, setSearch] = useState('');
    const [books, setBooks] = useState([]);

    const handleSearch = async () => {
        if (!search.trim()) return;

        try{
            const data = await fetchSearchBooks(search);

            const formattedBooks = data.docs.map(formatSearchBook)

            setBooks(formattedBooks);
        } catch (error) {
            setBooks([]);
        }
    }

    return(
        <div>
            <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar libros..."
            />
            <button onClick={handleSearch}>
                Buscar
            </button>
            <div>
                {books.map((book) => (
                    <div key={book.id}>
                        <img src={book.cover} alt={book.title} />
                        <h3>{book.title}</h3>
                        <p>{book.author}</p>
                        <p>{book.firstPublishYear}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}