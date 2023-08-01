[![Express Logo](https://i.cloudup.com/zfY6lL7eFa-3000x3000.png)](http://expressjs.com/)

# RESTful API with Express

Build Restful API using [Express](https://expressjs.com/) & [MySQL](https://www.mysql.com/).

## How to Use

Create a `.env` file in root project folder and add the following:

```
PORT=
HOST=

DB_HOST=
DB_NAME=
DB_USER=
DB_PORT=
DB_PASSWORD=
```

You need Node.js installed on your machine. Simply download the installer from nodejs.org and go through the installation steps.

Once Node.js is installed, open your command prompt or terminal and navigate into this project folder. There, run `npm install` to install all required dependencies.

Finally, run `npm run dev` to start the development server and visit `http://localhost:8000/api`.

## API Methods

List of routes:

| Route                           | HTTP | Auth | Descriptions        |
| :------------------------------ | :--- | :--- | :------------------ |
| `/auth`                         | POST | No   | authentication      |
| `/course`                       | GET  | Yes  | Get all course      |
| `/course/populars`              | GET  | Yes  | Get popular course  |
| `/course/search?title=${title}` | GET  | Yes  | Get course by title |
| `/users`                        | GET  | Yes  | Get all users       |
| `/users/{id}`                   | GET  | Yes  | Get specified user  |
