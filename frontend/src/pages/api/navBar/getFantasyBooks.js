import { fetchFantasyBooks} from "@/pages/api/apiFetch";
import {formatSearchBook} from "@/pages/api/searchResult/formatSearchBook";

export const getFantasyBooks = async (limit=10) => {
    try {
        const data = await fetchFantasyBooks(limit);

        const fantasyBooks = await data.works.map(formatSearchBook);

        return {
            books: fantasyBooks
        };
    } catch (error) {
        console.log('Error obteniendo libros de fantasia:', error);
        throw error;
    }
}