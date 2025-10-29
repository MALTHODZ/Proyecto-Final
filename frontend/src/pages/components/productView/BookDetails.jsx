import BookDescription from "@/pages/components/productView/BookDescription";
import BookBasicInfo from "@/pages/components/productView/BookBasicInfo";
import PurchaseInfo from "@/pages/components/productView/PurchaseInfo";
import BookCover from "@/pages/components/productView/BookCover";
import useBookDetails from "@/pages/hooks/useBookDetails";

export default function BookDetails({ book, onBack }) {
    const { detailedBook, loading } = useBookDetails(book);

    if (loading) {
        return (
            <div>
                <button onClick={onBack}>Volver</button>
                <p>Cargando detalles...</p>
            </div>
        );
    }

    return (
        <div>
            <button onClick={onBack}>
                Volver
            </button>

            <div>
                    <BookCover cover={detailedBook.cover} title={detailedBook.title} />

                    <BookBasicInfo
                        title={detailedBook.title}
                        year={detailedBook.firstPublishYear}
                        author={detailedBook.authors?.at(0)}
                    />

                    <BookDescription description={detailedBook.description} />

                    <PurchaseInfo/>

            </div>
        </div>
    );
}