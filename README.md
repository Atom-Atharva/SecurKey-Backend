# Password Manager Backend

This is the backend for a Password Manager application. It provides the API endpoints for managing user accounts and passwords.

## Technologies Used

-   Node.js: JavaScript runtime environment
-   Express.js: Web application framework for Node.js
-   MongoDB: NoSQL database for storing user data

## Getting Started

### Prerequisites

-   Node.js installed on your local machine
-   MongoDB database setup

### Installation

1. Clone the repository:

    ```bash
    git clone <repository-url>
    ```

2. Install dependencies:

    ```bash
    cd backend
    npm install
    ```

3. Set up environment variables:

    Create a `.env` file in the root directory of the backend and define the following variables:

    ```plaintext
    MONGODB_URI=<your-mongodb-uri>
    ```

4. Start the server:

    ```bash
    npm start
    ```

## API Endpoints

### 1. Update Password

-   **Endpoint**: `/api/vault/update`
-   **Method**: `POST`
-   **Description**: Updates an existing password for a user.
-   **Request Body**:
    ```json
    {
        "title": "Site Title",
        "password": "NewPassword",
        "username": "UserUsername"
    }
    ```
-   **Response**:
    -   Success: 200 OK
    -   Error: 400 Bad Request

### 2. Add Password

-   **Endpoint**: `/api/vault/add`
-   **Method**: `POST`
-   **Description**: Adds a new password for a user.
-   **Request Body**:
    ```json
    {
        "title": "Site Title",
        "password": "Password",
        "username": "UserUsername"
    }
    ```
-   **Response**:
    -   Success: 200 OK
    -   Error: 400 Bad Request

### 3. Delete Password

-   **Endpoint**: `/api/vault/delete`
-   **Method**: `DELETE`
-   **Description**: Deletes a password for a user.
-   **Request Body**:
    ```json
    {
        "title": "Site Title",
        "username": "UserUsername"
    }
    ```
-   **Response**:
    -   Success: 200 OK
    -   Error: 400 Bad Request

### 4. Show Passwords

-   **Endpoint**: `/api/vault/show`
-   **Method**: `GET`
-   **Description**: Retrieves all passwords for a user.
-   **Request Body**:
    ```json
    {
        "username": "UserUsername"
    }
    ```
-   **Response**:
    -   Success: 200 OK with an array of passwords
    -   Error: 400 Bad Request

## Contributing

Contributions are welcome! Please feel free to submit a pull request if you'd like to contribute to this project.
