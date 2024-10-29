// Importar el módulo http
import http from 'http';

// Crear un servidor HTTP
const server = http.createServer((req, res) => {
  // Configurar el encabezado de la respuesta
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // Enviar el cuerpo de la respuesta
  res.end('Hola Mundo\n');
});

// Definir el puerto donde el servidor escuchará
const port = 3000;
server.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
