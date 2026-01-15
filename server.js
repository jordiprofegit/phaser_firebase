const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Servir arxius estàtics
app.use(express.static('.'));

// Ruta per defecte
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index_alert.html'));
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`✅ Servidor Express funcionant:`);
    console.log(`   🌐 http://localhost:${PORT}`);
    console.log(`   📁 Servint arxius de: ${__dirname}`);
});