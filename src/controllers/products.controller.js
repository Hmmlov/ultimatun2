import { getConnection, sql, queries } from '../database/'

export const getProducts = async(request, res) => {

    try {
        const pool = await getConnection(); //llamamos a la conexión. es el cliente para conectarnos y pedir consultas
        
    //con el pool lo que se hace es hacer una petición, y la petición es hacer una consultar, lo guardamos en result y lo mostramos en consola
        const result = await pool.request()
        .query(queries.getAllProduct) //productos que están en la base de datos
    
    /* console.log(result); */

    res.json(result.recordset)

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};


export const createNewProduct = async(req, res) => {
    const {name, description} = req.body
    let {quantity} = req.body


    if(name == null || description == null){
        return res.status(400).json({
            msg: 'Bad request. Please fill all fields'
        })
    }

    if( quantity == null) quantity = 0; 

    try {
        const pool = await getConnection();
    
    await pool
        .request()
        .input("name", sql.VarChar, name)
        .input("description", sql.Text, description)
        .input("quantity", sql.Int, quantity)
        .query(queries.createNewProduct);
    
    res.json({
        name,
        description,
        quantity
    })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const getProductById = async (req, res) => {

    const {id} = req.params

    const pool = await getConnection();
    const result = await pool.request()
        .input('Id', id)
        .query(queries.getProductById)
    console.log(result);
    res.send(result.recordset[0]);
}

export const deleteProductById = async(req, res) => {
    const {id} = req.params
    const pool = await getConnection()
    const result = await pool.request()
        .input('Id', id)
        .query(queries.deleteProduct)

    res.sendStatus(204);
}


export const getTotalProducts = async (req, res) => {
    const pool = await getConnection();
  
    const result = await pool.request().query(queries.getTotalProducts);
    console.log(result);
    res.json(result.recordset[0][""]);
  };

export const updateProductById = async (req, res) => {
    const { description, name, quantity } = req.body;
  
    // validating
    if (description == null || name == null || quantity == null) {
      return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
    }
  
    try {
      const pool = await getConnection();
      await pool
        .request()
        .input("name", sql.VarChar, name)
        .input("description", sql.Text, description)
        .input("quantity", sql.Int, quantity)
        .input("id", req.params.id)
        .query(querys.updateProductById);
      res.json({ name, description, quantity });
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };