export const fetchTrendingData = async (period, limit) => {
    const response = await fetch(
        `https://openlibrary.org/trending/${period}.json?limit=${limit}`
    );

    if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    return response.json();
};

export const fetchBookDetails = async (workKey) => {
    const response = await fetch(`https://openlibrary.org${workKey}.json`);

    if (response.ok) {
        return response.json();
    }

    return null;
};

export const fetchSearchBooks = async (query, limit) => {
    try {
        const response = await fetch(
            `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=10`
        );

        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error('Error buscando libros:', error);
        throw error;
    }
};