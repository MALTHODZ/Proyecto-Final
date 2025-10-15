export const getTrendingBooks = async (period = 'monthly', limit = 10) => {
    try {
        const response = await fetch(
            `https://openlibrary.org/trending/${period}.json?limit=${limit}`
        );

        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();

        // Procesar los libros y obtener detalles adicionales
        const booksWithCovers = await Promise.all(
            data.works.slice(0, limit).map(async (work) => {
                return await formatSubjectBook(work);
            })
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

// Función auxiliar para formatear
const formatSubjectBook = async (work) => {
    const workId = work.key ? work.key.replace('/works/', '') : null;

    let coverUrl = 'https://via.placeholder.com/180x270?text=Sin+portada';

    // Intentar obtener el cover_id desde los detalles del libro
    if (workId) {
        try {
            const detailsResponse = await fetch(`https://openlibrary.org${work.key}.json`);
            if (detailsResponse.ok) {
                const details = await detailsResponse.json();

                // Intentar obtener cover desde diferentes fuentes
                if (details.covers && details.covers.length > 0) {
                    const coverId = details.covers[0];
                    coverUrl = `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`;
                }
            }
        } catch (err) {
            console.error(`Error obteniendo detalles para ${workId}:`, err);
        }
    }

    return {
        id: work.key,
        title: work.title,
        firstPublishYear: work.first_publish_year,
        workId: workId,
        cover: coverUrl,
    };
};