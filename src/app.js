import express from "express";
import config from "./config";

import productsRoutes from './routes/products.routes'

const app = express()


// settings , esta sección va a servir para configurar el puerto - si existe una variable que tome ese puerto y si no existe que utilcie el 3000

app.set('port', config.port )
//configurarlo para que reciba datos en json

// middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false}));

app.use(productsRoutes);

export default app