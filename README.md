#  Bookstore API – Assignment 4

##  Project Overview
This project is a **Bookstore REST API** developed using **Node.js, Express, and MongoDB**.  
It is an extension of **Assignment 3** and focuses on implementing a **professional backend architecture** with **security and role-based access control**.

The application follows the **MVC (Model–View–Controller)** pattern and includes **authentication, authorization, and RBAC** using **JWT** and **bcrypt**.

---

##  Project Architecture (MVC)
```text
bookstore-api
│
├── models/
│   ├── Book.js
│   └── User.js         
│
├── controllers/
│   ├── bookController.js 
│   └── authController.js
│
├── routes/
│   ├── bookRoutes.js     
│   └── authRoutes.js     
│
├── middleware/
│   ├── authMiddleware.js 
│   └── roleMiddleware.js 
│
├── .env                  
└── server.js
```
**Models** – MongoDB schemas  
**Controllers** – application logic  
**Routes** – API endpoints  
**Middleware** – authentication and authorization  

---

##  Objects in the Project

###  Book (Primary Object)
Fields:
- `title`
- `author`
- `year`

Full CRUD operations are implemented for books.

---

###  User (Secondary Object)
Fields:
- `email`
- `password` (hashed)
- `role` (`user` or `admin`)

The User object is used for authentication and role-based access control.

---

##  Authentication & Security

- Passwords are securely hashed using **bcrypt**
- Authentication is implemented with **JWT (JSON Web Tokens)**
- JWT is sent via HTTP headers:

---

##  Role-Based Access Control (RBAC)

| Action | Access |
|------|-------|
| GET (read books) | Public |
| POST (add book) | Admin only |
| PUT (update book) | Admin only |
| DELETE (delete book) | Admin only |

All access control rules are enforced **on the backend**.

---

##  API Endpoints

### Authentication
- `POST /api/auth/register` – Register a user or admin
- `POST /api/auth/login` – Login and receive JWT

### Books
- `GET /api/books` – Get all books
- `GET /api/books/:id` – Get book by ID
- `POST /api/books` – Create a book (**admin only**)
- `PUT /api/books/:id` – Update a book (**admin only**)
- `DELETE /api/books/:id` – Delete a book (**admin only**)

---

##  Testing (Postman)

All functionality is tested using **Postman**, including:
- Successful admin requests
- Forbidden access for regular users
- Unauthorized access without JWT

A Postman collection is provided to demonstrate:
- CRUD operations
- JWT authentication
- Role restrictions

---

##  Frontend (Optional)

A simple HTML frontend is included **only for demonstration purposes**.  
It allows users to:
- Log in
- View books
- Add and delete books as an admin

<img width="759" height="787" alt="Снимок экрана 2026-02-01 в 18 03 55" src="https://github.com/user-attachments/assets/6ad915c9-54ea-4a74-bbfb-31249f4bacad" />

