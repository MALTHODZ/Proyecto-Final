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

    if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
    }
    return response.json();
};


export const fetchSearchBooks = async (query, limit = 10) => {
    try {
        const response = await fetch(
            `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=${limit}`
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

export const fetchFantasyBooks = async (limit) => {
    const response = await fetch(`https://openlibrary.org/subjects/fantasy.json?limit=${limit}`);

    if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    return response.json();
};

export const fetchFictionBooks = async (limit) => {
    const response = await fetch(`https://openlibrary.org/subjects/science_fiction.json?limit=${limit}`);

    if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    return response.json();
};

export const fetchThrillerBooks = async (limit) => {
    const response = await fetch(`https://openlibrary.org/subjects/thriller.json?limit=${limit}`);

    if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    return response.json();
};