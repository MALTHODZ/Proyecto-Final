import TrendingBooks from "@/pages/components/TrendingBooks";


export default function Home() {
  return (
    <>
      <div>
          <header>
              <span>Icono</span>
              <p>Babunger Books</p>
              <input/>
              <button>Registrarse</button>
              <button>Iniciar sesion</button>
          </header>
          <nav>
              <div>Categorias</div>
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
