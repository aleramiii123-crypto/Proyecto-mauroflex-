const mongoose = require('mongoose');

// 1. Conectamos al servidor de base de datos
// Esta línea es la que crea el "puente" con MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/mauroflex')
  .then(() => console.log("✅ ¡Conexión exitosa con MongoDB!"))
  .catch((err) => console.log("❌ Error al conectar: " + err));

// 2. Definimos cómo es una manguera (Esquema/Schema)
// Aquí le dices a la base de datos qué campos debe tener tu producto
const mangueraSchema = new mongoose.Schema({
    nombre: String,
    presion: Number,
    cantidad: Number
});

// 3. Creamos el modelo
// Esto permite que el código pueda crear, leer y guardar mangueras
const Manguera = mongoose.model('Manguera', mangueraSchema);

// Mensaje que confirmaste en tu terminal
console.log("El modelo de Mauroflex está listo.");
