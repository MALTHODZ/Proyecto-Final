import {useState} from "react";
import {fetchSearchBooks} from "@/pages/api/apiFetch";
import {formatSearchBook} from "@/pages/api/searchResult/formatSearchBook";


export default function BookSearch() {

    const [search, setSearch] = useState('');
    const [books, setBooks] = useState([]);

    const handleSearch = async () => {
        if (!search.trim()) return;

        const data = await fetchSearchBooks(search).catch((error) => {
            console.log("Error buscando libros",error);
        });

       if (data){
           const formattedBooks = data.docs.map(formatSearchBook);
           setBooks(formattedBooks);
       } else{
           setBooks([]);
       }
    }

    return(
        <div>
            <div className="search">
            <input className="search-input"
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Buscar libros..."
            />
            <button className="search-button" onClick={handleSearch}>
                Buscar
            </button>
            </div>
            <div className="books-grid">
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