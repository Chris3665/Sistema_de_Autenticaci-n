require('dotenv').config();
console.log("JWT_SECRET cargado:", process.env.JWT_SECRET ? "Sí" : "NO");
const express = require('express');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Microservicio de Autenticación funcionando (versión en memoria)' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});