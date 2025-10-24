import {fetchFictionBooks} from "@/pages/api/apiFetch";
import {formatBook} from "@/pages/api/bookFormat";


export const getFictionBooks = async (limit = 10) => {
    try{
        const data = await fetchFictionBooks(limit)

        const fictionBooks = await Promise.all(
            data.works.slice(0, limit).map(formatBook)
        )
        return{
            books: fictionBooks,
        }
    } catch(error){
        console.log('Error al obtener los libros de ficcion',error)
        throw error;
    }
}