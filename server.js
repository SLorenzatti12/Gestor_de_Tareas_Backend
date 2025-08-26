// server.js
import express from "express";
import sequelize from "./models/index.js";
import taskRoutes from "./routes/tasks.js";
import userRoutes from "./routes/users.js";
import cors from "cors";

const app = express();
app.use(express.json()); // Para leer JSON en el body

// Rutas
app.use("/api/tasks", taskRoutes);
app.use("/api/users", userRoutes);
app.use(cors());

const PORT = 3000;

// Sincronizamos la DB y arrancamos el servidor
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
  });
});