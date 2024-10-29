import express from 'express';
import fs from 'fs';
const app = express();
const port = 3005;

// Función para leer los datos del archivo y convertirlos a JSON
function leerSuperheroesDesdeArchivo(archivo) {

  // Leemos el contenido del archivo especificado
  const datos = fs.readFileSync(archivo, 'utf8');

  // Convertimos el contenido a un objeto JavaScript (JSON)
  return JSON.parse(datos);
}

// Leemos los datos de superhéroes desde el archivo y los almacenamos en una variable
const superheroes = leerSuperheroesDesdeArchivo('superheroes.txt');

// Creamos un servidor Express
// Ruta para obtener un superhéroe por su ID
app.get('/superheroes/:id', (req, res) => {

  // Obtenemos el ID del superhéroe desde los parámetros de la URL
  const superheroeId = parseInt(req.params.id);

  // Buscamos el superhéroe con el ID correspondiente en el arreglo de superhéroes
  const superheroe = superheroes.find(heroe => heroe.id === superheroeId);

  // Si se encuentra el superhéroe, lo enviamos como respuesta
  if (superheroe) {
    res.json(superheroe);
  } else {

    // Si no se encuentra, enviamos un mensaje de error
    res.status(404).json({ mensaje: 'Superhéroe no encontrado' });
  }
});

// Ruta para obtener superhéroes filtrados por un atributo y valor
app.get('/superheroes/atributo/:atributo/:valor', (req, res) => {

  // Obtenemos el atributo y el valor a filtrar desde los parámetros de la URL
  const { atributo, valor } = req.params;

  // Filtramos los superhéroes que coincidan con el atributo y valor especificados
  const superheroesFiltrados = superheroes.filter(heroe => heroe[atributo].includes(valor));

  // Enviamos los superhéroes filtrados como respuesta
  res.json(superheroesFiltrados);
});

// Ruta para obtener superhéroes mayores de 30 años, de la Tierra y con al menos 2 poderes
app.get('/superheroes/edad/mayorA30', (req, res) => {

  // Filtramos los superhéroes según los criterios especificados
  const superheroesFiltrados = superheroes.filter(heroe => heroe.edad > 30 && heroe.planetaOrigen === 'Tierra' && heroe.poder.length >= 2);
  
  // Enviamos los superhéroes filtrados como respuesta
  res.json(superheroesFiltrados);
});

// Iniciamos el servidor en el puerto especificado
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});