# Purely Precious Jewellery Store

A custom eCommerce platform built using React, Redux, Node, Express, and MongoDB. This project features a fully functional shopping cart, user authentication, payment integration, and an admin dashboard for managing products, orders, and users.

## Table of Contents

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Usage](#usage)
4. [Build & Deploy](#build&deploy)
5. [Demo](#demo)

## Features

- **Full Featured Shopping Cart**: Includes PayPal and credit/debit card payments.
- **User Authentication**: JWT authentication stored in an HTTP-Only cookie.
- **Admin Dashboard**: Manage customers, products, and orders.
- **Product Rating & Review System**: Users can rate and review products.
- **Product Search, Carousel, Pagination**: Enhanced product browsing experience.
- **User Profile**: Users can view their orders.
- **Admin Product Management**: CRUD operations on products.
- **Admin User Management**: Manage user information.
- **Admin Order Details**: View detailed order information and mark orders as delivered.
- **Checkout Process**: Includes shipping and payment method selection.
- **Database Seeder**: Seed the database with initial products and users.

## Technologies Used

- **Front-End**:
  - React with functional components & hooks
  - React Router
  - React-Bootstrap UI library

- **State Management**:
  - Redux (Actions & Reducers)
  - Using Redux state in components (useDispatch & useSelector)

- **Back-End**:
  - Express.js for creating an extensive back end
  - MongoDB with Mongoose ODM
  - JWT authentication with HTTP-Only cookie
  - Custom authentication middleware
  - Custom error handler

- **Payments**:
  - Integrating the PayPal API

- **Other**:
  - Environment variables
  - Project deployment

## Usage

- Create a MongoDB database and obtain your `MongoDB URI` - [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
- Create a PayPal account and obtain your `Client ID` - [PayPal Developer](https://developer.paypal.com/)

### Env Variables

Rename the `.env.example` file to `.env` and add the following

```
NODE_ENV= development
PORT= 5000
MONGO_URI = ADD_YOUR_MONGO_URI
JWT_SECRET= ADD_YOUR_SECRET
PAYPAL_CLIENT_ID = ADD_YOUR_PAYPAL_CLIENT_ID
PAYPAL_APP_SECRET = ADD_YOUR_PAYPAL_APP_SECRET
PAYPAL_API_URL = ADD_YOUR_PAYPAL_API_URL
PAGINATION_LIMIT=8
```

Change the PAGINATION_LIMIT to what you want

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

### Run

```

# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```

## Build & Deploy

```
# Create frontend prod build
cd frontend
npm run build
```

### Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

```
Sample User Logins

admin@email.com (Admin)
123456

john@email.com (Customer)
123456

jane@email.com (Customer)
123456
```

---
## Demo

