import { imageCover } from "@/pages/utils/imageCover";

export default function BookCover({ cover, title }) {
    if (cover) {
        return (
            <img
                src={cover}
                alt={title}
            />
        );
    }

    return (
        <img src={imageCover} alt={title} />
    );
}