import express from 'express';
import cors from 'cors';
import userRouter from './routes/userRoutes.js';

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Middleware de logs simple
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});

// Rutas
app.use('/users', userRouter);

app.get('/', (req, res) => {
  res.send('¡Bienvenido al servidor Express con ES Modules!');
});

// Ruta no encontrada
app.use((req, res, next) => {
  res.status(404).json({ error: 'Recurso no encontrado' });
});

// Manejo de errores
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ error: 'Error interno del servidor' });
});

export default app;