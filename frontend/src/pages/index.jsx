import TrendingBooks from "@/pages/components/homePage/TrendingBooks";
import Head from 'next/head';
import Link from 'next/link';



export default function Home() {
  return (
    <>
        <Head>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        </Head>

          <header className="header-container">

                  <div className="logo">
                      <span className="material-symbols-outlined">book_ribbon</span>
                      <span className="logo-text">Babunger Books</span>
                  </div>

              <Link href="/components/searchResult/ButtonSearch" className="btn btn-primary" > Haz click para buscar un libro </Link>

              <div className="auth-buttons">
              <Link href="/components/userAuthentication/register/Register" className="btn btn-primary">
                          Registrarse
                      </Link>
                  <Link href="/components/userAuthentication/login/Login" className="btn btn-secondary">
                      Iniciar Sesion
                  </Link>
                  </div>
          </header>
          <nav className="navbar">
              <Link className="navbar-text" href="/components/navBar/FantasyBooks"> Libros de Fantasia</Link>
              <Link className="navbar-text" href="/components/navBar/FictionBooks"> Libros de Ficcion</Link>
              <Link className="navbar-text" href="/components/navBar/ThrillerBooks"> Libros de Thriller</Link>
          </nav>
          <main>
              <div>
                  <TrendingBooks/>
              </div>
          </main>
          <footer className="footer-container">
              <div>Sitio web con fines educativos creado por Xavier Santiago</div>
              <div>Contenido elaborado con fines educativos y de aprendizaje</div>
              <div>Fecha de creacion año 2025</div>
          </footer>
    </>
  );
}
