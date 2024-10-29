import { EventEmitter } from 'events'; // Importación correcta

// Crear una instancia de EventEmitter
const emisor = new EventEmitter(); // Instancia correcta

// Definir un evento personalizado
emisor.on('saludo', (nombre) => { // No hay espacio extra y comillas corregidas
  console.log(`¡Hola, ${nombre}!`);
});

// Emitir el evento `saludo`
emisor.emit('saludo', 'Mundo'); // Comillas corregidas
