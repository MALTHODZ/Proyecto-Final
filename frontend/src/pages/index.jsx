import TrendingBooks from "@/pages/components/homePage/TrendingBooks";
import BookSearch from "@/pages/components/searchResult/BookSearch";
import Link from 'next/link';



export default function Home() {
  return (
    <>
        <head>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=book_ribbon" />
        </head>
      <body>
          <header className="header-container">

                  <div className="logo">
                      <span className="material-symbols-outlined">book_ribbon</span>
                      <span className="logo-text">Babunger Books</span>
                  </div>

              <div className="search">
                  <BookSearch/>
              </div>

              <div className="auth-buttons">
              <Link href="/components/userAuthentication/register/Register" className="btn btn-primary">
                          Registrarse
                      </Link>
                      <button className="btn btn-secondary">
                          Iniciar Sesion
                      </button>
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
              <div>Sitio web con fines educativos</div>
              <div>Contenido elaborado con fines educativos y de aprendizaje.</div>
              <div>Fecha de creacion:2025</div>
          </footer>
      </body>
    </>
  );
}
