import {fetchBookDetails} from "@/pages/api/apiFetch";

const PLACEHOLDER_COVER = 'https://via.placeholder.com/180x270?text=Sin+portada';

const getWorkId = (workKey) => {
    return workKey ? workKey.replace('/works/', '') : null;
};

const getCoverUrl = async (work) => {
    const workId = getWorkId(work.key);

    if (!workId) {
        return PLACEHOLDER_COVER;
    }

    try {
        const details = await fetchBookDetails(work.key);

        if (details?.covers && details.covers.length > 0) {
            const coverId = details.covers[0];
            return `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`;
        }
    } catch (err) {
        console.error(`Error obteniendo detalles para ${workId}:`, err);
    }

    return PLACEHOLDER_COVER;
};

export const formatBook = async (work) => {
    const workId = getWorkId(work.key);
    const coverUrl = await getCoverUrl(work);

    return {
        id: work.key,
        title: work.title,
        firstPublishYear: work.first_publish_year,
        workId: workId,
        cover: coverUrl,
    };
};
