export default function BookBasicInfo({ title, year }) {
    return (
        <div>
            <h1>{title}</h1>

            {year && (
                <p>Año: {year}</p>
            )}
        </div>
    );
}