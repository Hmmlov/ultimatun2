import sql from "mssql";
import config from "../config";
const dbSettings ={ //parametros de donde me voy a conectar
    user: config.dbUser,
    password: config.dbPassword,
    server: config.dbServer,
    database: config.dbDatabase,
    options: {
        encrypt: true, // for azure
    trustServerCertificate: true // change to true for local dev / self-signed certs
    }
}

export async function getConnection() { //esta es una función, que va a conectarse a esos parametros con el sql.connect(parametros a nuestra base de datos). con esa conexión, voy a hacer una petición a la base de datos y la consulta que voy a ejecutar es ("Select 1")
    try {
        const pool = await sql.connect(dbSettings)
        return pool;
    } catch (error) {
        console.log(error);

    }
}

export {sql};