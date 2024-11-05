import express, {Application} from "express";
import cors from "cors";
import { AppDataSource } from "./data-source";
import productRoutes from "./routes/productRoutes";
import swaggerUI  from "swagger-ui-express";
import swaggerSpec from "./swagger/swagger";

const app: Application = express();
const PORT = process.env.PORT ?? 3000;

//Middleware - Guardianes de conexion
app.use(cors());
app.use(express.json());

//rutas
app.use("/api/", productRoutes);

//Documentacion
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

//Inicialiazacion de la base de datos y el servidor
AppDataSource.initialize()
  .then(()=> {
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en hhtp://localhost:${PORT}\n`)
        console.log(`Endpoints`);
        console.log(`API Products hhtp:localhost:${PORT}/api/products\n`);
        console.log(`Documentacion`);
        console.log(`Swagger en http://localhost:${PORT}/api-docs`);
    })
  })
  .catch((error) => console.log(error));