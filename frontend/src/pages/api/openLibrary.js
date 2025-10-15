/**
 * Obtiene libros trending (populares del momento)
 * @param {string} period - 'daily', 'weekly', 'monthly'
 * @param {number} limit - Número de libros
 */

export const getTrendingBooks = async (period = 'monthly', limit = 10) => {
    try {
        const response = await fetch(
            `https://openlibrary.org/trending/${period}.json?limit=${limit}`
        );

        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();

        return {
            period,
            books: data.works.map(work => formatSubjectBook(work))
        };

    } catch (error) {
        console.error('Error obteniendo libros trending:', error);
        throw error;
    }
};

// Función auxiliar para formatear

const formatSubjectBook = (work) => {
    return {
        id: work.key,
        title: work.title,
        firstPublishYear: work.first_publish_year
    };
};