export default function BookDescription({ description }) {
    return (
        <div>
            <h2>Descripción</h2>
            <p className="book-description">{description}</p>
        </div>
    );
}