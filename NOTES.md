# API Documentation

This document provides details on how to interact with the API endpoints using Postman. The endpoints include authentication and CRUD operations for the `State` model.

## Live API endpoints

you can use live api link `https://anscer-assignment.onrender.com/` to access database resources.

## Postman Collection

You can use the following Postman collection to test the API endpoints.

### Exported Postman Collection (JSON)

```json
{
  "info": {
    "name": "anscer API collection",
    "_postman_id": "12345-abcdef-67890",
    "description": "A collection of API endpoints for managing states",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "item": [
    {
      "name": "Register User",
      "request": {
        "method": "POST",
        "header": [
          {
            "key": "Content-Type",
            "value": "application/json",
            "type": "text"
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\n  \"name\": \"John Doe\",\n  \"email\": \"johndoe@example.com\",\n  \"password\": \"password123\"\n}"
        },
        "url": {
          "raw": "http://localhost:4000/api/auth/register",
          "protocol": "http",
          "host": ["localhost"],
          "port": "4000",
          "path": ["api", "auth", "register"]
        }
      },
      "response": []
    },
    {
      "name": "Login User",
      "request": {
        "method": "POST",
        "header": [
          {
            "key": "Content-Type",
            "value": "application/json",
            "type": "text"
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\n  \"email\": \"johndoe@example.com\",\n  \"password\": \"password123\"\n}"
        },
        "url": {
          "raw": "http://localhost:4000/api/auth/login",
          "protocol": "http",
          "host": ["localhost"],
          "port": "4000",
          "path": ["api", "auth", "login"]
        }
      },
      "response": []
    },
    {
      "name": "Create State",
      "request": {
        "method": "POST",
        "header": [
          {
            "key": "Content-Type",
            "value": "application/json",
            "type": "text"
          },
          {
            "key": "x-access-token",
            "value": "{{token}}",
            "type": "text"
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\n  \"name\": \"InitialState\",\n  \"description\": \"The robot is powered on and initializing.\",\n  \"status\": \"active\"\n}"
        },
        "url": {
          "raw": "http://localhost:4000/api/v1",
          "protocol": "http",
          "host": ["localhost"],
          "port": "4000",
          "path": ["api", "v1"]
        }
      },
      "response": []
    },
    {
      "name": "Get All States",
      "request": {
        "method": "GET",
        "header": [
          {
            "key": "x-access-token",
            "value": "{{token}}",
            "type": "text"
          }
        ],
        "url": {
          "raw": "http://localhost:4000/api/v1",
          "protocol": "http",
          "host": ["localhost"],
          "port": "4000",
          "path": ["api", "v1"]
        }
      },
      "response": []
    },
    {
      "name": "Get State by ID",
      "request": {
        "method": "GET",
        "header": [
          {
            "key": "x-access-token",
            "value": "{{token}}",
            "type": "text"
          }
        ],
        "url": {
          "raw": "http://localhost:4000/api/v1/:id",
          "protocol": "http",
          "host": ["localhost"],
          "port": "4000",
          "path": ["api", "v1", ":id"],
          "variable": [
            {
              "key": "id",
              "value": "state-id"
            }
          ]
        }
      },
      "response": []
    },
    {
      "name": "Update State",
      "request": {
        "method": "PUT",
        "header": [
          {
            "key": "Content-Type",
            "value": "application/json",
            "type": "text"
          },
          {
            "key": "x-access-token",
            "value": "{{token}}",
            "type": "text"
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\n  \"name\": \"finalState\",\n  \"description\": \"The robot is powered off and resting.\",\n  \"status\": \"inactive\"\n}"
        },
        "url": {
          "raw": "http://localhost:4000/api/v1/:id",
          "protocol": "http",
          "host": ["localhost"],
          "port": "4000",
          "path": ["api", "v1", ":id"],
          "variable": [
            {
              "key": "id",
              "value": "state-id"
            }
          ]
        }
      },
      "response": []
    },
    {
      "name": "Delete State",
      "request": {
        "method": "DELETE",
        "header": [
          {
            "key": "x-access-token",
            "value": "{{token}}",
            "type": "text"
          }
        ],
        "url": {
          "raw": "http://localhost:4000/api/v1/:id",
          "protocol": "http",
          "host": ["localhost"],
          "port": "4000",
          "path": ["api", "v1", ":id"],
          "variable": [
            {
              "key": "id",
              "value": "state-id"
            }
          ]
        }
      },
      "response": []
    }
  ]
}
```

### API Endpoints

#### Registration

**Register User**

- **URL**: `api/auth/register`
- **Method**: `POST`
- **Headers**:
  - `Content-Type`: `application/json`
- **Body**:
  ```json
  {
    "name": "John Doe",
    "email": "johndoe@example.com",
    "password": "password123"
  }
  ```
- **Response**:
  - **201 Created**
    ```json
    {
      "message": "New user registered",
      "name": "John Doe",
      "email": "johndoe@example.com",
      "token": "jwt-token-here",
      "expires": "1h"
    }
    ```
  - **400 Bad Request**
    ```json
    {
      "errors": [
        {
          "msg": "Validation error message"
        }
      ]
    }
    ```
  - **500 Internal Server Error**
    ```json
    {
      "message": "Server error"
    }
    ```

#### Authentication

**Login User**

- **URL**: `api/auth/login`
- **Method**: `POST`
- **Headers**:
  - `Content-Type`: `application/json`
- **Body**:
  ```json
  {
    "email": "johndoe@example.com",
    "password": "password123"
  }
  ```
- **Response**:
  - **200 OK**
    ```json
    {
      "name": "John Doe",
      "email": "johndoe@example.com",
      "token": "jwt-token-here",
      "expires": "1h"
    }
    ```
  - **400 Bad Request**
    ```json
    {
      "message": "Invalid credentials"
    }
    ```
  - **500 Internal Server Error**
    ```json
    {
      "message": "Server error"
    }
    ```

**Protected Routes**

All CRUD operations below require the `x-access-token` header with a valid JWT token.

#### CRUD Operations for State

**Create State**

- **URL**: `/api/v1`
- **Method**: `POST`
- **Headers**:
  - `Content-Type`: `application/json`
  - `x-access-token`: `{{token}}`
- **Body**:
  ```json
  {
    "name": "InitialState",
    "description": "The robot is powered on and initializing.",
    "status": "active"
  }
  ```
- **Response**:
  - **201 Created**
    ```json
    {
      "message": "New State created"
    }
    ```
  - **400 Bad Request**
    ```json
    {
      "message": "Validation error message"
    }
    ```
  - **500 Internal Server Error**
    ```json
    {
      "message": "Server error"
    }
    ```

**Get All States**

- **URL**: `/api/v1`
- **Method**: `GET`
- **Headers**:
  - `x-access-token`: `{{token}}`
- **Response**:
  - **200 OK**
    ```json
    [
      {
        "_id": "state-id",
        "name": "InitialState",
        "description": "The robot is powered on and initializing.",
        "status": "active",
        "createdBy": "username",
        "createdAt": "timestamp",
        "updatedAt": "timestamp"
      },
      ...
    ]
    ```
  - **500 Internal Server Error**
    ```json
    {
      "message": "Server error"
    }
    ```

**Get State by ID**

- **URL**: `/api/v1/:id`
- **Method**: `GET`
- **Headers**:
  - `x-access-token`: `{{token}}`
- **Parameters**:
  - `id`: The ID of the state to retrieve.
- **Response**:
  - **200 OK**
    ```json
    {
        "_id": "state-id",
        "name": "InitialState",
        "description": "The robot is powered on and initializing.",
        "status": "active",
        "createdBy": "username",
        "createdAt": "timestamp",
        "updatedAt": "timestamp"
      },
    ```
  - **404 Not Found**
    ```json
    {
      "message": "State not found"
    }
    ```
  - **500 Internal Server Error**
    ```json
    {
      "message": "Server error"
    }
    ```

**Update State**

- **URL**: `/api/v1/:id`
- **Method**: `PATCH`
- **Headers**:
  - `Content-Type`: `application/json`
  - `x-access-token`: `{{token}}`
- **Parameters**:
  - `id`: The ID of the state to update.
- **Body**:
  ```json
  {
    "name": "finalState",
    "description": "The robot is powered off and resting.",
    "status": "inctive"
  }
  ```
- **Response**:
  - **200 OK**
    ```json
  {
    "message": "State Updated"
  },
    ```
  - **404 Not Found**
    ```json
    {
      "message": "State not found"
    }
    ```
  - **500 Internal Server Error**
    ```json
    {
      "message": "Server error"
    }
    ```

**Delete State**

- **URL**: `/api/v1/:id`
- **Method**: `DELETE`
- **Headers**:
  - `x-access-token`: `{{token}}`
- **Parameters**:
  - `id`: The ID of the state to delete.
- **Response**:
  - **200 OK**
    ```json
    {
      "message": "State deleted"
    }
    ```
  - **404 Not Found**
    ```json
    {
      "message": "State not found"
    }
    ```
  - **500 Internal Server Error**
    ```json
    {
      "message": "Server error"
    }
    ```

## Environment Variables

### Token

You should store your JWT token in a Postman environment variable named `token`. This allows you to easily include the token in your requests without hardcoding it.

### How to Set Environment Variables in Postman

1. Click on the "Environments" tab on the left sidebar.
2. Click on "Create Environment".
3. Name your environment (e.g., "Anscer Environment").
4. Add a variable named `token` and paste your JWT token in the value field.
5. Save the environment.
6. Select this environment in the environment dropdown at the top right of the Postman window.

Now your requests will use the `{{token}}` variable for the `x-access-token` header.

## Testing the API

- Import the Postman collection by clicking on "Import" in Postman and selecting the JSON file you exported.
- Make sure your local server is running.
- Select your environment in Postman.
- Test the API endpoints by sending requests and verifying the responses.

