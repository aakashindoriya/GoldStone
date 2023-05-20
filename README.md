# Web Application Routes

This repository contains a web application with several routes for managing users in a MongoDB database. The application is built using [Express.js](https://expressjs.com/) framework.

## Routes

### 1. Add User

- **Route**: `GET /adduser`
- **Function**: `ADDUSERS`
- **Description**: This route is used to add a user to the MongoDB database after fetching user data from an external site.

### 2. Get All Users

- **Route**: `GET /`
- **Function**: `ALLUSERS`
- **Description**: This route is used to retrieve all the users from the MongoDB collection and return them as a response.

### 3. Update User

- **Route**: `POST /update/:id`
- **Function**: `UPDATEUSER`
- **Description**: This route is used to update a specific user in the MongoDB collection based on the provided ID. The `:id` parameter in the route indicates the ID of the user to be updated.

### 4. Get Single User

- **Route**: `GET /:id`
- **Function**: `SINGLEUSER`
- **Description**: This route is used to retrieve a single user from the MongoDB collection based on the provided ID. The `:id` parameter in the route indicates the ID of the user to be fetched.

## Setup

To run this web application locally, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. move into clint Install dependencies: `npm install`
3. Configure MongoDB connection in the application provide a .env file with MONGOURL.
4. Start the server: `npm start`
5. Access the application in your browser at `http://localhost:8080`
