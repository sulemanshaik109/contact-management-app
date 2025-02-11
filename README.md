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

## Deployment

### Backend Deployment on Render

1. Create a Render Account:
    - Sign up for a free account at Render.

2. Create a New Web Service:
    - In the Render dashboard, click on "New" and then "Web Service".
    - Connect your GitHub repository and select the notes-app repository.

3. Configure Build and Start Commands:
    - Build Command:

        ```
        npm install
        ```

    - Start Command:

        ```
        npm start
        ```

4. Set Environment Variables:

    - In the Render service settings, add any necessary environment variables.

5. Deploy:

    - Trigger a new deploy by pushing changes to your GitHub repository or clicking the "Deploy" button in Render.

6. Access the Application:

    - Once the deployment is successful, you can access the backend at the URL provided by Render.

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

## Testing

### Using Postman

1. Add New Request:

    - Create a new request in Postman or Insomnia.
    - Set the request method to GET, POST, PUT, or DELETE depending on the endpoint you want to test.

2. Set URL:

    - Use the URL provided by Render for the backend. For example:

        ```
        https://suleman-notes-app.onrender.com/api/notes
        ```

3. Send Request:

    - Send the request and check the response.

## Show Your Support

Give a ⭐️ if you like this project!

