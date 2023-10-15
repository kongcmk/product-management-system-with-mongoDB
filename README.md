# Product Management System with MongoDB

This overview of a Product Management System built with MongoDB. The system allows you to manage products through a set of simple and efficient API endpoints.

## Features

- **Get All Products**: Retrieve a list of all products stored in the database.
- **Get a Single Product**: Retrieve a single product by its unique ObjectId.
- **Add a Product**: Add a new product, ensuring data validity and unique product IDs.
- **Edit a Product**: Update an existing product, including the 'updated_at' timestamp.
- **Delete a Product**: Remove a product from the database.


## API Endpoints

1. **Get All Products**
   - Method: `GET`
   - Endpoint: `/products`

2. **Get a Single Product**
   - Method: `GET`
   - Endpoint: `/products/:id`

3. **Add a Product**
   - Method: `POST`
   - Endpoint: `/products`

4. **Edit a Product**
   - Method: `PUT`
   - Endpoint: `/products/:id`

5. **Delete a Product**
   - Method: `DELETE`
   - Endpoint: `/products/:id`
