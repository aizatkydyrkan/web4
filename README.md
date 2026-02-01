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
│   ├── Book.js           # Схема данных для книг (MongoDB/Mongoose)
│   └── User.js           # Схема данных для пользователей
│
├── controllers/
│   ├── bookController.js # Логика обработки запросов для книг
│   └── authController.js # Логика регистрации и входа
│
├── routes/
│   ├── bookRoutes.js     # Эндпоинты для работы с книгами
│   └── authRoutes.js     # Эндпоинты для аутентификации
│
├── middleware/
│   ├── authMiddleware.js # Проверка JWT токена
│   └── roleMiddleware.js # Проверка прав доступа (Admin/User)
│
├── .env                  # Переменные окружения (конфиденциально)
└── server.js             # Точка входа в приложение
