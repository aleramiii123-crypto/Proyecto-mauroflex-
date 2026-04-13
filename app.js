
    try {
        const nuevoProducto = new Producto(req.body);
        await nuevoProducto.save();
        res.redirect('/');
    } catch (err) {
        res.status(500).send("Error al guardar el producto");
    }
});

// 5. INICIAR SERVIDOR
app.listen(3000, () => {
    console.log("🚀 Servidor Mauroflex corriendo en http://localhost:3000");
});