# TODO App - REST API Documentation

RESTful API Designed in Node.js for a straightforward TODO application.

## Index

- [Requirements](#requirements)
- [Installation](#installation)
- [Schema](#schema)
- [Authentication](#authentication)
- [Root End-Point](#root-end-point)
- [Core Resources](#core-resources)

## Requirements

- [node & npm](http://nodejs.org)
- [PostMan](https://www.getpostman.com/)

## Installation

1. Clone the repository: `https://github.com/abhijitsahoo99/todo-app.gitI`
2. Install the application packages: `npm install` and then `node install express`
3. Start the server: `node todoServer.js`
4. Open PostMan and make a `GET` request to `http://localhost:3000/todos`

## Schema

1. All API access is over HTTP, and accessed from `http://localhost:3000/todos`.
2. All data is sent and received as JSON.

## Authentication

There are no authentication implemented yet. So, all the end-points are open.

## Root End-Point

`http://localhost:3000/todos`

## Core Resources

### Todos

`Todos` object represents snapshot of a specific Todo with a unique Id. You can retrieve it to see details about the Todo.

#### Schema

```javascript
{
    id: 123456;
    title: "Build a Todo backend API",
    description: "I have to build a RESTful API for a simple TODO application in NODE.JS",
}
```

#### End-Points

| Method   | End-Point    | Description             |
| -------- | ------------ | ----------------------- |
| `GET`    | `/todos`     | List all _todos_        |
| `POST`   | `/todos`     | Create a new _todo_     |
| `GET`    | `/todos/:id` | Fetch a specific _todo_ |
| `PUT`    | `/todos/:id` | Edit existing _todo_    |
| `DELETE` | `/todos/:id` | Delete existing _todo_  |
