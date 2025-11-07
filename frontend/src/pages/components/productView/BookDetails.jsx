import BookDescription from "@/pages/components/productView/bookDetailsComponents/BookDescription";
import BookBasicInfo from "@/pages/components/productView/bookDetailsComponents/BookBasicInfo";
import PurchaseInfo from "@/pages/components/productView/bookDetailsComponents/PurchaseInfo";
import BookCover from "@/pages/components/productView/bookDetailsComponents/BookCover";
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

            <div className="book-container">
                <div className="book-details">
                    <BookCover cover={detailedBook.cover} title={detailedBook.title} />


                    <BookBasicInfo
                        title={detailedBook.title}
                        year={detailedBook.firstPublishYear}
                        author={detailedBook.authors?.at(0)}
                    />
                </div>
                <div className="book-info">
                    <BookDescription description={detailedBook.description} />

                    <PurchaseInfo/>
                    </div>

            </div>
        </div>
    );
}