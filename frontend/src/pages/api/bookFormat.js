import {fetchBookDetails} from "@/pages/api/apiFetch";
import {imageCover} from "@/pages/utils/imageCover";

const getWorkId = (workKey) => {
    return workKey ? workKey.replace('/works/', '') : null;
};

const getCoverUrl = async (work) => {
    const workId = getWorkId(work.key);

    if (!workId) {
        return imageCover;
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

    return imageCover;
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
