import { useState } from 'react';

export default function BookCard ({ book, viewDetails }) {
    const [imgError, setImgError] = useState(false);

    return (
        <div>
            {!imgError ? (
                <img
                    src={book.cover}
                    alt={book.title}
                    onError={() => {
                        console.log('Error al cargar la imagen:', book.title);
                        setImgError(true);
                    }}
                />
            ) : (
                <div>
                    <p>Sin portada</p>
                </div>
            )}

            <h3>
                {book.title}
            </h3>

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