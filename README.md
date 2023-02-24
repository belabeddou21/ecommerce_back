#Online Store Backend
This is a simple backend code for an online store, built using Node.js and Express.js, with a MongoDB database for data storage and JWT for authentication.

The backend code consists of four models: user, product, cart, and order. Only the admin user has the ability to create, update, or delete products.

#Features
User authentication using JWT
User model with name, email, password, and role
Product model with name, description, image, price, and category
Cart model for storing user's selected products
Order model for storing user orders
API endpoints for creating, reading, and updating products (for admin users only), creating, reading, and updating users, creating, reading, updating, and deleting carts (for individual users), and creating and reading orders
Getting Started
To run the code locally, you will need to have Node.js and MongoDB installed on your machine. Clone the repository, install the dependencies using npm install, and start the server using npm start.

#bash
Copy code
git clone https://github.com/your-username/online-store-backend.git
cd online-store-backend
npm install
npm start
#API Documentation
To see the available API endpoints and their usage, please refer to the documentation here.

#License
This project is licensed under the MIT License.
