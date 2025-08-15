# Gadget Grove - E-commerce Web Application

Gadget Grove is a full-stack e-commerce web application designed as an online storefront for mobile phones. It provides a seamless and modern shopping experience for users, complemented by a comprehensive and secure dashboard for administrators to manage products, orders, and site content.

**Live Demo:**   https://gadgetgrove-1.onrender.com/

## Table of Contents

- [Features](#features)
  - [Customer-Facing Features](#customer-facing-features)
  - [Admin Panel Features](#admin-panel-features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation and Setup](#installation-and-setup)
- [Usage](#usage)
- [Deployment](#deployment)

## Features

### Customer-Facing Features

- **Secure OTP Authentication:** Passwordless login system using One-Time Passwords sent to the user's registered email address.
- **Dynamic Homepage:** Features a carousel for promotional slides, a list of mobile brands for easy navigation, and a section for suggested products.
- **Product Discovery:** Users can browse products by brand or use the search functionality to find specific models.
- **Detailed Product Pages:** Each product has a dedicated page displaying multiple images, price, highlights, and a full description. The system also indicates if a product is out of stock.
- **Shopping Cart Management:** A persistent shopping cart allows users to add, review, and remove items before checkout.
- **Streamlined Checkout Process:** A simple, multi-step checkout process for adding or selecting a shipping address and choosing a payment method.
- **Payment Gateway Integration:** Supports secure online payments via **Razorpay** and provides an option for **Cash on Delivery (COD)**.
- **User Profile Management:** Logged-in users can access a personal profile page to view their order history, manage personal details, and update their shipping addresses.

### Admin Panel Features

- **Secure Admin Login:** A separate, password-protected login portal for the site administrator.
- **Centralized Dashboard:** Provides an overview of all incoming customer orders.
- **Product Management:** Full CRUD (Create, Read, Update, Delete) functionality for products. Admins can add new mobiles with details like name, brand, price, stock quantity, descriptions, highlights, and upload multiple images.
- **Order Management:** Admins can view comprehensive details for each order, including customer information, delivery address, product details, and payment status.
- **Content Management:** Admins have direct control over the homepage carousel, with the ability to add, edit, or delete promotional slides.
- **Account Security:** Admins can change their own password from within the dashboard.

## Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MySQL
- **Image Storage:** Cloudinary (Cloud-based image management and delivery)
- **Payment Gateway:** Razorpay
- **Email Service:** Nodemailer (for OTP emails)
- **Password Hashing:** bcrypt.js

## Project Structure

```
gadget_grove_project/
├── frontend/
│   ├── scripts/
│   ├── styles/
│   └── templets/
└── backend/
├── config/
├── public/
├── routes/
├── .env
├── package.json
└── server.js
```




# Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v18 or later)
- npm (Node Package Manager)
- A local MySQL server instance
- Git

### Installation and Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/YourUsername/GadgetGrove.git](https://github.com/YourUsername/GadgetGrove.git)
    cd GadgetGrove
    ```

2.  **Install Backend Dependencies:**
    ```bash
    cd backend
    npm install
    ```

3.  **Set up the Database:**
    - Create a new database in your local MySQL server.
    - Execute the `CREATE TABLE` scripts for all required tables (`users`, `products`, `admin`, `slides`, etc.).

4.  **Configure Environment Variables:**
    - In the `backend` directory, create a file named `.env`.
    - Copy the contents of `.env.example` (if available) or add the following variables, replacing the placeholder values with your actual credentials.

    ```env
    # Server Configuration
    PORT=3000

    # Database Credentials
    DB_HOST=localhost
    DB_USER=your_db_user
    DB_PASSWORD=your_db_password
    DB_NAME=your_db_name
    DB_PORT=3306

    # Cloudinary Credentials
    CLOUDINARY_CLOUD_NAME=your_cloud_name
    CLOUDINARY_API_KEY=your_api_key
    CLOUDINARY_API_SECRET=your_api_secret

    # Razorpay Credentials (Test Keys)
    RAZORPAY_KEY_ID=your_rzp_test_key
    RAZORPAY_KEY_SECRET=your_rzp_test_secret

    # Nodemailer Credentials (for OTP)
    EMAIL_USER=your_email@gmail.com
    EMAIL_PASS=your_gmail_app_password
    ```

## Usage

1.  **Start the Backend Server:**
    - From the `backend` directory, run:
      ```bash
      node server.js
      ```
    - The server will start on the port specified in your `.env` file (e.g., `http://localhost:3000`).

2.  **Run the Frontend:**
    - Open the `frontend/templets/index.html` file in your browser. Using a live server extension in your code editor is recommended.

## Deployment

The live version of this project is deployed using a modern cloud infrastructure:

- **Backend (Web Service):** Deployed on **Render**.
- **Frontend (Static Site):** Deployed on **Render**.
- **Database:** A managed MySQL instance hosted on **Railway**.
