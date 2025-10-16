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
