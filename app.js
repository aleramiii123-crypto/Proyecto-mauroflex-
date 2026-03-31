const mongoose = require('mongoose');

// 1. Conexión al servidor de base de datos (MongoDB)
mongoose.connect('mongodb://127.0.0.1:27017/mauroflex')
    .then(() => console.log("✅ Conexión exitosa con MongoDB"))
    .catch((err) => console.log("❌ Error al conectar: " + err));

// 2. Definición del Esquema de Producto (Colchones Mauroflex)
const productoSchema = new mongoose.Schema({
    nombre: String,
    descripcion: String,
    precio: Number,
    cantidad: Number
});

// 3. Creación del Modelo
const Producto = mongoose.model('Producto', productoSchema);

console.log("🚀 El modelo de Mauroflex está listo para usar.");

