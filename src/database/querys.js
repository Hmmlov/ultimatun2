

export const queries = {
    getAllProduct: 'SELECT * FROM Products',
    createNewProduct: 'INSERT INTO Products (name, description, quantity) VALUES (@name,@description,@quantity)',
    getProductById: 'SELECT * FROM Products WHERE Id = @Id',
    deleteProduct: 'DELETE FROM [projectsystem].[dbo].[Products] WHERE Id = @Id',
    getTotalProducts: 'SELECT COUNT(*) FROM Products',
    updateProductsById:  "UPDATE Products SET Name = @name, Description = @description, Quantity = @quantity WHERE Id = @id",
}