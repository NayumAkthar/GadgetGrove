# Gadget Grove — Mobile E-commerce Web Application

Gadget Grove is a full-stack e-commerce application for browsing and purchasing mobile phones. Customers can discover products, manage a shopping cart, save a delivery address, and place orders using Razorpay or Cash on Delivery (COD). An admin interface provides tools to manage products, orders, and homepage promotional slides.

**Live website:** https://gadgetgrove-1.onrender.com/

> **Project status:** The repository contains the application source code. Before running it locally, configure the backend environment, create the required MySQL tables, and update the frontend API URLs for your local backend.

## Table of Contents

- [Features](#features)
  - [Customer Features](#customer-features)
  - [Admin Features](#admin-features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Local Setup](#local-setup)
  - [1. Clone the Repository](#1-clone-the-repository)
  - [2. Install Backend Dependencies](#2-install-backend-dependencies)
  - [3. Configure Environment Variables](#3-configure-environment-variables)
  - [4. Configure the MySQL Database](#4-configure-the-mysql-database)
  - [5. Configure the Frontend API URL](#5-configure-the-frontend-api-url)
  - [6. Run the Application](#6-run-the-application)
- [Backend API Overview](#backend-api-overview)
- [Deployment](#deployment)
- [Important Security Notes](#important-security-notes)
- [Known Setup Limitations](#known-setup-limitations)

## Features

### Customer Features

- **Email OTP authentication:** Sign-up and passwordless login flows using one-time passwords sent by email.
- **Homepage:** Promotional carousel and suggested products.
- **Product discovery:** Browse products by brand and search for mobile models.
- **Product details:** View product images, price, description, highlights, and stock availability.
- **Shopping cart:** Add products, view cart items, change the cart through the available endpoints, remove items, and clear the cart.
- **Checkout and addresses:** Enter and retrieve a delivery address during checkout.
- **Payment options:** Razorpay checkout integration and Cash on Delivery (COD).
- **Order history:** View orders and payment information associated with a user account.
- **Responsive page styling:** Separate HTML and CSS files for the customer and admin pages.

### Admin Features

- **Admin login:** Login using an email address and a password hash stored in the database.
- **Product management:** Add mobile products with brand, price, stock, description, highlights, and up to four product images; update product price and stock.
- **Order management:** View orders and inspect order/customer/payment details.
- **Promotional slide management:** Add, update, list, and delete homepage carousel slides.
- **Password change:** Change the admin password after providing the current password.

## Technology Stack

| Area | Technologies |
|---|---|
| Frontend | HTML5, CSS3, JavaScript |
| Backend | Node.js, Express.js |
| Database | MySQL with `mysql2` |
| Image storage | Cloudinary |
| Online payments | Razorpay |
| Email delivery | Nodemailer with the SendGrid transport |
| Password hashing | `bcryptjs` |
| File uploads | Multer and `multer-storage-cloudinary` |

## Project Structure

```text
GadgetGrove/
├── backend/
│   ├── config/
│   │   ├── db.js
│   │   └── nodemailer.js
│   ├── public/
│   │   ├── images/
│   │   └── slides/
│   ├── routes/
│   │   ├── address.js
│   │   ├── admin.js
│   │   ├── adminfunctionalities.js
│   │   ├── cart.js
│   │   ├── orders.js
│   │   ├── paymentRoutes.js
│   │   ├── products.js
│   │   ├── search.js
│   │   ├── slides.js
│   │   └── userRoutes.js
│   ├── package.json
│   └── server.js
├── frontend/
│   └── frontend/
│       ├── scripts/
│       ├── styles/
│       └── templets/
└── README.md
```

The frontend directory is named `templets` in the current project.

## Prerequisites

Install the following before starting:

- [Node.js](https://nodejs.org/) (Node.js 18 or later recommended)
- npm (included with Node.js)
- [MySQL](https://dev.mysql.com/downloads/) server
- [Git](https://git-scm.com/)
- A code editor such as Visual Studio Code
- Accounts and credentials for Cloudinary, SendGrid, and Razorpay if you want to test those integrations

## Local Setup

### 1. Clone the Repository

```bash
git clone https://github.com/NayumAkthar/GadgetGrove.git
cd GadgetGrove
```

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

### 3. Configure Environment Variables

Create a `.env` file inside the `backend/` directory. Do not commit this file to Git.

```env
# Server
PORT=3000

# MySQL
DB_HOST=localhost
DB_USER=your_mysql_user
DB_PASSWORD=your_mysql_password
DB_NAME=gadget_grove
DB_PORT=3306

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Razorpay server credentials (use test credentials for development)
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret

# SendGrid email delivery
SENDGRID_API_KEY=your_sendgrid_api_key
EMAIL_USER=verified_sender_email@example.com
```

**Email configuration note:** The current email transport uses `SENDGRID_API_KEY`. `EMAIL_PASS` is not used by the current SendGrid transport configuration. Make sure the sender address is valid for your email provider.

### 4. Configure the MySQL Database

Create a database matching `DB_NAME`, then create the tables required by the application. The current code references these tables:

- `users`
- `admin`
- `products`
- `slides`
- `addresses`
- `cart_items`
- `orders`
- `payments`

The uploaded project does **not** include a database schema or SQL setup script. You will need to prepare the schema with the columns expected by the queries in `backend/routes/` before the application can work correctly. The application also expects a pre-created admin record with a bcrypt-compatible password hash.

### 5. Configure the Frontend API URL

The frontend JavaScript currently calls the deployed backend URL directly in several places. For local development, update those API URLs to your local backend, for example:

```text
http://localhost:3000
```

For a maintainable setup, define one API base URL in a shared frontend configuration file instead of repeating the URL in multiple scripts. Do not place server-side secrets in frontend JavaScript.

### 6. Run the Application

Start the backend from the `backend/` directory:

```bash
node server.js
```

The API should listen on the port configured in `.env`, defaulting to `3000`.

To open the frontend, use the Live Server extension in Visual Studio Code and serve the `frontend/frontend/templets/` directory. Open `index.html` through Live Server rather than relying on a direct `file://` URL.

The frontend will only work end-to-end once the database is prepared and its API URLs point to the correct backend.

## Backend API Overview

The Express server registers these route groups:

| Area | Base path | Main operations |
|---|---|---|
| User accounts | `/api/users` | Sign-up, send OTP, verify OTP, retrieve user |
| Admin login | `/api/admin` | Admin login |
| Admin tools | `/api/adminfunctions` | Product and slide management, order lookup, admin password change |
| Products | `/api/product`, `/api/brands`, `/api/suggestions` | Product details, brand listings, suggestions |
| Search | `/api/search` | Product search |
| Carousel slides | `/api/slides` | Retrieve homepage slides |
| Cart | `/api/cart` | Retrieve, add, remove, and clear cart items |
| Addresses | `/api/address` | Save and retrieve an address |
| Orders | `/api/orders` | Place COD orders and retrieve a user's orders |
| Payments | `/api/payment` | Create Razorpay orders and record payment/order data |

Refer to the route files in `backend/routes/` for request bodies, response formats, and exact endpoint behavior.

## Deployment

The project README currently lists the following deployment arrangement:

- **Frontend:** Render static site
- **Backend:** Render web service
- **Database:** MySQL hosted on Railway

Live website: https://gadgetgrove-1.onrender.com/

Deployment providers, service URLs, and environment variable names may need to be updated to match the currently active deployment configuration.

## Important Security Notes

- Never commit `.env`, database passwords, API secrets, email credentials, or other private configuration to a public repository.
- Use Razorpay test credentials during development.
- The current payment callback code records payment information but does not perform server-side Razorpay signature verification. Implement and test signature verification before treating payments as production-secure.
- Review admin route authorization before production use. A login screen alone does not protect administrative API endpoints; the server should authenticate and authorize every admin-only request.
- Do not expose private keys in frontend JavaScript. Frontend Razorpay configuration should use only the public key ID; keep the key secret on the backend.
- Store OTPs securely and add expiry, attempt limits, and rate limiting before production use.

## Known Setup Limitations

- A database schema/SQL initialization file is not included in the uploaded project.
- The frontend has hard-coded API URLs that need to be configured for local development or a different deployment.
- The backend `package.json` currently does not define a start script. You can run `node server.js`, or add a suitable npm script.
- Verify all configured deployment URLs and third-party credentials before publishing or redeploying.
