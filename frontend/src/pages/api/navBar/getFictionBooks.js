import {fetchFictionBooks} from "@/pages/api/apiFetch";
import {formatSearchBook} from "@/pages/api/searchResult/formatSearchBook";


export const getFictionBooks = async (limit = 10) => {
    try{
        const data = await fetchFictionBooks(limit)

        const fictionBooks = await data.works.map(formatSearchBook);

        return{
            books: fictionBooks,
        }
    } catch(error){
        console.log('Error al obtener los libros de ficcion',error)
        throw error;
    }
}