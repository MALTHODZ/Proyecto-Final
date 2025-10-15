
export const getBookCover = (coverId, size = 'M') => {
    if (!coverId) {
        return 'https://via.placeholder.com/180x270?text=Sin+portada';
    }
    return `https://covers.openlibrary.org/b/id/${coverId}-${size}.jpg`;
};
