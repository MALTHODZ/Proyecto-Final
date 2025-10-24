import {fetchThrillerBooks} from "@/pages/api/apiFetch";
import {formatBook} from "@/pages/api/bookFormat";


export const getThrillerBooks = async (limit = 8) => {
    try{
        const data = await fetchThrillerBooks(limit);

        const thrillerBooks = await Promise.all(
            data.works.slice(0, limit).map(formatBook)
        );
        return{
            books: thrillerBooks
        }
    } catch(error) {
        console.log('Error obteniendo libros Thriller',error)
        throw error;
    }
}