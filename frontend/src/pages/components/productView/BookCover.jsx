import {useState} from "react";

export default function BookCover({ cover, title }) {
    const [imgError, setImgError] = useState(false);

    if (cover && !imgError) {
        return (
            <img
                src={cover}
                alt={title}
                onError={() => setImgError(true)}
            />
        );
    }

    return (
        <div>
            <p>Sin portada</p>
        </div>
    );
}