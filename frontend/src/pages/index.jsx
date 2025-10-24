import TrendingBooks from "@/pages/components/homePage/TrendingBooks";
import BookSearch from "@/pages/components/searchResult/BookSearch";
import Link from 'next/link';


export default function Home() {
  return (
    <>
      <div>
          <header>
              <span>Icono</span>
              <p>Babunger Books</p>
              <BookSearch/>
              <Link href="/components/userAuthentication/register/Register">Register</Link>
              <button>Iniciar sesion</button>
          </header>
          <nav>
              <h2>Categorias</h2>
              <Link href="/components/navBar/FantasyBooks"> Libros de Fantasia</Link>
              <hr/>
              <Link href="/components/navBar/FictionBooks"> Libros de Ficcion</Link>
              <hr/>
              <Link href="/components/navBar/ThrillerBooks"> Libros de Thriller</Link>
          </nav>
          <main>
              <div>
                  <TrendingBooks/>
              </div>
              <div>Lista de libros</div>
          </main>
          <footer>
              <div>2025</div>
          </footer>
      </div>


    </>
  );
}
