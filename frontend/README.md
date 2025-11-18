This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

Para iniciar el proyecto se tiene que entrar en la carpeta frontend e inicias el comando npm run dev

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Proyecto Catálogo de libros
📋 Descripción del Proyecto
Aplicación web de biblioteca desarrollada con Next.js que permite buscar libros, gestionar usuarios y explorar diferentes categorías literarias.
Funcionalidades Principales

🔐 Sistema de autenticación: Registro e inicio de sesión de usuarios
🔍 Buscador de libros: Búsqueda avanzada de libros
📚 Categorías: Tiene 3 categorías diferentes de libros
📖 Vista de detalles: Cada libro tiene su página de detalles
🏠 Página de inicio: Muestra 10 libros al cargar

📁 Estructura de Carpetas
src/
├── pages/
│   ├── api/
│   │   └── apiFetch.js    # Llamadas a la API de OpenLibrary
│   └── index.js           # Página principal
├── lib/
│   └── mongo.js           # Configuración de MongoDB
└── styles/                # Archivos CSS del proyecto
🛠️ Tecnologías Utilizadas
Dependencias Principales

Next.js: Framework de React
React: Biblioteca de UI
Mongoose: ODM para MongoDB
Formik: Gestión de formularios

API Externa

OpenLibrary API: Fuente de datos de libros

🗄️ Base de Datos
Conexión a MongoDB

Archivo de configuración: src/lib/mongo.js
String de conexión almacenado en variable de entorno (.env)
Herramienta de exploración: MongoDB Compass

Variables de Entorno
envMONGODB_URI=tu_string_de_conexion
⚠️ Problemas Conocidos

La API de OpenLibrary no muestra algunas descripciones de los libros

🚀 Mejoras Futuras
Funcionalidades Planeadas

Sistema de favoritos: Implementar un apartado donde los usuarios puedan guardar sus libros favoritos (similar a prácticas anteriores)
Carrito de compra: Si la API proporcionara información de precios, se implementaría un sistema de cesta de compra
Mejoras visuales:

Interfaz más moderna y atractiva
Mejor experiencia de usuario


Perfil de usuario mejorado:

Cabecera con imagen de usuario
Nombre de usuario visible
Enlace directo a página de inicio desde el perfil



📦 Instalación
bash# Instalar dependencias
npm install

# Configurar variables de entorno
# Crear archivo .env con tu string de conexión a MongoDB

# Ejecutar en desarrollo
npm run dev
🖥️ Uso

Accede a la aplicación
Regístrate como nuevo usuario o inicia sesión
Explora las categorías de libros
Utiliza el buscador para encontrar libros específicos
Haz clic en cualquier libro para ver sus detalles

📝 Notas de Desarrollo
Este proyecto fue desarrollado priorizando la funcionalidad básicas de un catálogo de libros. Las mejoras mencionadas no se han desarrollado por agilizar la entrega del MVP.

Proyecto desarrollado con Next.js y MongoDB