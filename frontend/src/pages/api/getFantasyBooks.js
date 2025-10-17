import { fetchFantasyBooks} from "@/pages/api/apiFetch";
import { formatBook } from "@/pages/api/bookFormat";

export const getFantasyBooks = async (limit=10) => {
    try {
        const data = await fetchFantasyBooks(limit);

        const fantasyBooks = await Promise.all(
            data.works.slice(0, limit).map(formatBook)
        );
        return {
            books: fantasyBooks
        };
} catch (error) {
    console.error('Error obteniendo libros de fantasia:', error);
    throw error;
}
}