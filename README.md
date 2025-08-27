# Product Authentication App

A **full-stack authentication-based product app** with protected routes, JWT authentication, and input validation using **Joi**. Only logged-in users can access products.

**Live Demo:** [https://authentication-ui-tau.vercel.app/](https://authentication-ui-tau.vercel.app/)

---

## Features

- User Signup/Login with **JWT authentication**.
- Protected product routes.
- Input validation using **Joi**.
- Redirects unauthenticated users to login page.
- React.js frontend, Node.js + Express backend.

---

## Tech Stack

- **Frontend:** React.js  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Authentication:** JWT  
- **Validation:** Joi  
- **Deployment:** Vercel (Frontend)

---

## Screenshots

**Login Page**  
![Login](./screenshots/login.png)

**Products Page (Protected)**  
![Products](./screenshots/products.png)

**Error Message for Unauthenticated Access**  
![Unauthorized](./screenshots/unauthorized.png)

---

## Installation

```bash
# Clone repo
git clone <your-repo-link>

# Backend setup
cd backend
npm install
cp .env.example .env
# Add MONGO_URI and JWT_SECRET
npm start

# Frontend setup
cd frontend
npm install
npm start
