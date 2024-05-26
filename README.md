# PH_L2_B3_M2A_Express_TS_Server

## Overview

This project is an Express application developed using TypeScript, integrating MongoDB with Mongoose for effective data management. The application ensures data integrity through validation using Joi/Zod. It features a modular concept, providing functionality for both product and order management.

## Features

### Product Management

- Create a product
- Retrieve all products
- Retrieve a single product
- Update a product
- Delete a product
- Search products by name, description, or tags

### Order Management

- Create an order with inventory management logic and error handling
- Retrieve all orders
- Retrieve orders by user email

## Setting Up the Project

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-repo.git
   cd your-repo

   ```

2. Install dependencies:

   ```sh
   Copy code
   npm install

   ```

3. Set up environment variables in a .env file:

   ```env
   Copy code
   MONGO_URI=mongodb://localhost:27017/your-db
   PORT=5000
   
   ```

## Running the Application

4. Start the MongoDB server:

   ```sh
   Copy code
   mongod

   ```

5. Run the application:

   ```sh
   Copy code
   npm run dev
   ```

# API Endpoints

## Product Management

1. Create a product
   http://localhost:5000/api/products/create-product

Sample data
```
{
"product": {
"id": "67890",
"name": "Deluxe Widget",
"description": "A deluxe widget with multiple features and high durability.",
"price": 149.99,
"category": "Home Appliances",
"tags": ["home", "appliance", "durable"],
"variants": {
"type": "size",
"value": "large"
},
"inventory": {
"quantity": 30,
"inStock": true
},
"createdAt": "2024-05-23T14:20:00.000Z",
"updatedAt": "2024-05-23T14:20:00.000Z"
}
```

2. Get all products
   http://localhost:5000/api/products

3.Get single product
http://localhost:5000/api/products/12345

4. Update a product
   http://localhost:5000/api/products/12345

Sample Data
```
{
"name": "TWS Bluetooth",
"price": 99.99,
"variants": { "type": "color", "value": "Blue" },
"inventory": { "quantity": 69, "inStock": true }
}
```

5. Delete a product
   http://localhost:5000/api/products/67890

6. Search a product by name, Description, tags
   http://localhost:5000/api/products?searchTerm=tws

Order Management

1. Create an order with inventory management logics and errors
   http://localhost:5000/api/orders/create-order

Sample Date
```
{
"order": {
"email": "dipuhaider@gmail.com",
"productId": "664ef5e006d6fd24793c877a",
"price": 444,
"quantity": "1"
}
}
```

2. Get all orders
   http://localhost:5000/api/orders

3. Retrieve order by user email
   http://localhost:5000/api/orders?email=level2@programming-hero.com

##  Modular Concept

###  The project is structured using a modular approach, making it easy to maintain and scale by separating different functionalities into distinct modules.

##  Conclusion

### This Express application provides a comprehensive solution for managing products and orders, with robust validation and error handling, all while leveraging the power of TypeScript and MongoDB.
