import {fetchThrillerBooks} from "@/pages/api/apiFetch";
import {formatSearchBook} from "@/pages/api/searchResult/formatSearchBook";


export const getThrillerBooks = async (limit = 10) => {
    try{
        const data = await fetchThrillerBooks(limit);

        console.log(data);

        const thrillerBooks = await data.works.map(formatSearchBook);

        return{
            books: thrillerBooks
        }
    } catch(error) {
        console.log('Error obteniendo libros Thriller',error)
        throw error;
    }
}