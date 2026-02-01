#  Bookstore API – Assignment 4

##  Project Overview
This project is a **Bookstore REST API** developed using **Node.js, Express, and MongoDB**.  
It is an extension of **Assignment 3** and focuses on implementing a **professional backend architecture** with **security and role-based access control**.

The application follows the **MVC (Model–View–Controller)** pattern and includes **authentication, authorization, and RBAC** using **JWT** and **bcrypt**.

---

##  Project Architecture (MVC)
bookstore-api
│
├── models
│   ├── Book.js
│   └── User.js
│
├── controllers
│   ├── bookController.js
│   └── authController.js
│
├── routes
│   ├── bookRoutes.js
│   └── authRoutes.js
│
├── middleware
│   ├── authMiddleware.js
│   └── roleMiddleware.js
│
├── .env
└── server.js
