# restapi

This repository contains a Node.js REST API built with Express and MongoDB. 
It includes libraries such as JWT, bcrypt, and express-async-handler to handle authentication, password hashing, and asynchronous operations.

Prerequisites

Make sure you have the following installed:

Node.js
MongoDB

Clone this repository:

git clone (https://github.com/adnanfit/restapi.git)

Install dependencies:

npm install

Set up the MongoDB connection:
Create a .env file in the root directory of the project.
Add the following line to the .env file:

MONGODB_URI=<your_mongodb_uri>
Replace <your_mongodb_uri> with your MongoDB connection string.

Start the server:

npm start

The server will start running on http://localhost:3000.


API Endpoints
The following endpoints are available:

POST /api/auth/register: Create a new user.

POST /api/auth/login: Authenticate a user and receive a JWT token.

GET /api/users: Retrieve all users.

GET /api/users/:id: Retrieve a specific user by ID.

PUT /api/users/:id: Update a specific user by ID.

DELETE /api/users/:id: Delete a specific user by ID.

Make sure to include the JWT token in the Authorization header for authenticated routes.



License:

This project is licensed under the MIT License. See the LICENSE file for details.

Feel free to contribute and extend the functionality of this REST API. Happy coding!
