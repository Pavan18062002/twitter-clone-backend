# API Documentation

## User Registration

- **Description:** Registers a new user.
- **HTTP Method:** POST
- **URL:** `/api/users/register`
- **Request Body:**
  ```json
  {
    "username": "example_user",
    "password": "password123"
  }


## User Login
- **Description:** Logs in an existing user.
- **HTTP Method:** POST
- **URL:** /api/users/login
- **Request Body:**
```json
{
  "username": "example_user",
  "password": "password123"
}

## Post a Tweet

- **Description:** Posts a new tweet for the authenticated user.
- **HTTP Method:** POST
- **URL:** `/api/tweets`
- **Request Body:**
  ```json
  {
    "text": "This is a new tweet."
  }


## Fetch User Timeline

- **Description:** Fetches the timeline of tweets for the specified user.
- **HTTP Method:** GET
- **URL:** `/api/users/:userId/timeline`
- **Authentication:** Requires JWT token in the request headers.
- **Response:**
  - **Status Code:** 200 OK
  - **Body:**
    ```json
    [
      {
        "_id": "<TWEET_ID>",
        "userId": "<USER_ID>",
        "text": "This is a tweet.",
        "createdAt": "<TIMESTAMP>"
      },
      {
        "_id": "<TWEET_ID>",
        "userId": "<USER_ID>",
        "text": "Another tweet.",
        "createdAt": "<TIMESTAMP>"
      },
      ...
    ]
