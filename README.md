# Contact Management API

## Overview
This is a RESTful API for managing contacts. It allows users to create, read, update, and delete contacts with features like validation and filtering.

## Features
- CRUD operations for contacts
- Field validation using Joi
- MongoDB for data storage
- Query-based search for contacts

## Tech Stack
- Node.js
- Express.js
- MongoDB & Mongoose
- Joi for validation
- dotenv for environment variables
- Nodemon for development

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/sulemanshaik109/contact-management-app.git
   ```

2. Navigate to the project directory:
   ```sh
   cd contact-management-app
   ```

3. Install dependencies:
   ```sh
   npm install
   ```

4. Create a `.env` file and configure your MongoDB URL:
   ```sh
   MONGODB_URL=your_mongodb_connection_string
   ```

## Running the Application

### Development Mode
```sh
npm run dev
```

### Production Mode
```sh
npm start
```

## API Endpoints

### Contacts
- `GET /api/contacts` - Get all contacts
- `POST /api/contacts` - Create a new contact
- `GET /api/contacts/:id` - Get a single contact by ID
- `PUT /api/contacts/:id` - Update a contact
- `DELETE /api/contacts/:id` - Delete a contact

## Query Filtering
You can filter contacts using query parameters:
```sh
GET /api/contacts?name=John&email=john@example.com
```

## Validation
Joi is used to validate contact fields:
- `name`: Required, at least 3 characters
- `email`: Must be a valid email
- `phone`: Only numbers allowed


## Show Your Support

Give a ⭐️ if you like this project!

