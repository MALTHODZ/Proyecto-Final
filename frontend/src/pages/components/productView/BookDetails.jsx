import BookDescription from "@/pages/components/productView/bookDetailsComponents/BookDescription";
import BookBasicInfo from "@/pages/components/productView/bookDetailsComponents/BookBasicInfo";
import PurchaseInfo from "@/pages/components/productView/bookDetailsComponents/PurchaseInfo";
import BookCover from "@/pages/components/productView/bookDetailsComponents/BookCover";
import useBookDetails from "@/pages/hooks/useBookDetails";
import MainLayout from "@/pages/layouts/main-layout";

export default function BookDetails({ book, onBack }) {
    const { detailedBook, loading } = useBookDetails(book);

    if (loading) {
        return (
            <MainLayout>
                <p className="loading-details">Cargando detalles...</p>
            </MainLayout>
        );
    }

    return (
        <MainLayout>
            <div className="main-container">
                <button className="button-back" onClick={onBack}>
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
        </MainLayout>
    );
}