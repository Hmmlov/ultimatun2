//vamos a utilizar el modulo dotenv
/* import { config } from 'dotenv';
config(); */


// si existe esa variable de entorno PORT usala, en caso contrarío, utiliza el puerto 3000
import { config } from "dotenv";
config();

export default {
  port: process.env.PORT || 3000,
  dbUser: process.env.DB_USER || "",
  dbPassword: process.env.DB_PASSWORD || "",
  dbServer: process.env.DB_SERVER || "",
  dbDatabase: process.env.DB_DATABASE || "",
};