import BookCover from "@/pages/components/productView/bookDetailsComponents/BookCover";

export default function BookCard ({ book, viewDetails }) {
    return (
        <div className="book-decoration">
            <BookCover cover={book.cover} title={book.title} />

            <h3 className="book-tilt-text">
                {book.title}
            </h3>

            <h4 className="book-author-text">
                {book.authors?.at(0)}
            </h4>

            {book.firstPublishYear && (
                <p className="book-year">
                    Año: {book.firstPublishYear}
                </p>
            )}

            <button className="book-button" onClick={viewDetails}>
                Ver detalles
            </button>
        </div>
    );
};