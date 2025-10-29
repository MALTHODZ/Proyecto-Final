export default function BookBasicInfo({ title, year, author }) {
    return (
        <div>
            <h1>{title}</h1>

            {year && (
                <p>Año: {year}</p>
            )}

            {author && (
                <p>Autor: {author}</p>
            )}
        </div>
    );
}