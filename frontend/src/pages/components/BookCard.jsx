import BookCover from "@/pages/components/productView/BookCover";

export default function BookCard ({ book, viewDetails }) {
    return (
        <div className="film-decoration">
            <BookCover cover={book.cover} title={book.title} />

            <h3 className="film-tilt-text">
                {book.title}
            </h3>

            <h4 className="film-author-text">
                {book.authors?.at(0)}
            </h4>

            {book.firstPublishYear && (
                <p className="film-year">
                    Año: {book.firstPublishYear}
                </p>
            )}

            <button className="film-button" onClick={viewDetails}>
                Ver detalles
            </button>
        </div>
    );
};