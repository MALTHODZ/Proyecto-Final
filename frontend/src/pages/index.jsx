import TrendingBooks from "@/pages/components/TrendingBooks";
import BookSearch from "@/pages/components/BookSearch";
import Link from 'next/link';


export default function Home() {
  return (
    <>
      <div>
          <header>
              <span>Icono</span>
              <p>Babunger Books</p>
              <BookSearch/>
              <Link href="/components/Register">Register</Link>
              <button>Iniciar sesion</button>
          </header>
          <nav>
              <h2>Categorias</h2>
              <Link href="/components/FantasyBooks"> Libros de Fantasia</Link>
              <hr/>
              <Link href="/components/FictionBooks"> Libros de Ficcion</Link>
              <hr/>
              <Link href="/components/ThrillerBooks"> Libros de Thriller</Link>
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
