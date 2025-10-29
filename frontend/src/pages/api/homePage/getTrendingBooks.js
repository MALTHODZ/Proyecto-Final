import {fetchTrendingData} from '../apiFetch';
import {formatSearchBook} from "@/pages/api/searchResult/formatSearchBook";

export const getTrendingBooks = async (period = 'monthly', limit = 10) => {
    try {
        const data = await fetchTrendingData(period, limit);

        const booksWithCovers = await data.works.map(formatSearchBook);

        return {
            period,
            books: booksWithCovers
        };

    } catch (error) {
        console.log('Error obteniendo libros trending:', error);
        throw error;
    }
};
