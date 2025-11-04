import { imageCover } from "@/pages/utils/imageCover";

export default function BookCover({ cover, title }) {
    if (cover) {
        return (
            <img className="book-img"
                src={cover}
                alt={title}
            />
        );
    }

    return (
        <img src={imageCover} alt={title} />
    );
}