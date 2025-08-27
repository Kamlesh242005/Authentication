# 🔒 Product Authentication App

Welcome to the **Product Authentication App** – a secure, smart, and user-friendly platform where **only authenticated users** can explore products. Built with **JWT authentication, protected routes, and Joi validation**, this app ensures your data stays safe and your experience seamless.  

Check out the live app here: [https://authentication-ui-tau.vercel.app/](https://authentication-ui-tau.vercel.app/)

---

## ✨ Features

- **Secure User Authentication**
  - Signup and login with email and password.
  - Passwords are securely hashed before storage.
  - JSON Web Tokens (JWT) used to protect routes and sessions.

- **Protected Routes**
  - Products and sensitive pages are visible **only after login**.
  - Unauthorized users are redirected to the login page automatically.

- **Smart Input Validation**
  - Validates user inputs using **Joi**.
  - Prevents invalid or malicious data submission.

- **Responsive Frontend**
  - Built with **React.js**.
  - Smooth, clean UI with instant feedback.

- **Real-Time Feedback**
  - Shows login prompts when unauthenticated.
  - Handles errors gracefully.

---

## 🚀 Tech Stack

- **Frontend:** React.js  
- **Backend:** Node.js + Express.js  
- **Database:** MongoDB  
- **Authentication:** JWT  
- **Validation:** Joi  
- **Deployment:** Vercel (Frontend)

---

## 🛠 Installation

```bash
# Clone the repository
git clone <your-repo-link>

# Backend setup
cd backend
npm install
cp .env.example .env
# Add your MONGO_URI and JWT_SECRET
npm start

# Frontend setup
cd frontend
npm install
npm start
