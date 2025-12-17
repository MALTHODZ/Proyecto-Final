import Link from "next/link";
import Head from "next/head";
import {useUser} from "@/pages/hooks/useUser";

export default function MainLayout({ children }) {
    const { user } = useUser();

    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            </Head>

            <header className="header-container">
                <a href="/">
                    <div className="logo">
                        <span className="material-symbols-outlined">book_ribbon</span>
                        <span className="logo-text">Babunger Books</span>
                    </div>
                </a>

                <div className="auth-buttons">
                    {user ? (user.name) : (
                        <>
                            <Link href="/components/userAuthentication/register/Register" className="btn btn-primary">
                                Registrarse
                            </Link>
                            <Link href="/components/userAuthentication/login/Login" className="btn btn-secondary">
                                Iniciar Sesion
                            </Link>
                        </>
                    )}
                </div>
            </header>

            {children}

            <footer className="footer-container">
                <div>Sitio web con fines educativos creado por Xavier Santiago</div>
                <div>Contenido elaborado con fines educativos y de aprendizaje</div>
                <div>Fecha de creacion año 2025</div>
            </footer>
        </>
    )
}