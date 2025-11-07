export default function BookBasicInfo({ title, year, author }) {
    return (
        <div>
            <h1 className="book-tilt-text">{title}</h1>

            {year && (
                <p className="book-year">Año: {year}</p>
            )}

            {author && (
                <p className="book-author-text">Autor: {author}</p>
            )}
        </div>
    );
}