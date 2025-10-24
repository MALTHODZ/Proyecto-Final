import { fetchTrendingData } from '../apiFetch';
import { formatBook } from '../bookFormat';

export const getTrendingBooks = async (period = 'monthly', limit = 10) => {
    try {
        const data = await fetchTrendingData(period, limit);

        const booksWithCovers = await Promise.all(
            data.works.slice(0, limit).map(formatBook)
        );

        return {
            period,
            books: booksWithCovers
        };

    } catch (error) {
        console.error('Error obteniendo libros trending:', error);
        throw error;
    }
};