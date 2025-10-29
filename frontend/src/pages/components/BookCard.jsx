import BookCover from "@/pages/components/productView/BookCover";

export default function BookCard ({ book, viewDetails }) {
    return (
        <div>
            <BookCover cover={book.cover} title={book.title} />

            <h3>
                {book.title}
            </h3>

            <h4>
                {book.authors?.at(0)}
            </h4>

            {book.firstPublishYear && (
                <p>
                    Año: {book.firstPublishYear}
                </p>
            )}

            <button onClick={viewDetails}>
                Ver detalles
            </button>
        </div>
    );
};