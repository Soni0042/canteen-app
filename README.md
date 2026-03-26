#  School Canteen App

This is a React-based frontend application built as part of a screening task. It simulates a simple canteen ordering system where students can view snacks, place orders, and track their spending.

---

## ⚙️ Setup Instructions

Follow these steps to run the project locally:

### 1. Install dependencies

```bash
npm install
```

### 2. Start the frontend

```bash
npm run dev
```

### 3. Start the mock backend (JSON Server)

```bash
json-server --watch db.json --port 3000
```

Make sure both frontend and backend are running at the same time.

---

##  Libraries Used

* **React (Vite)** – for building the UI
* **React Router DOM** – for navigation between pages
* **React Query** – for handling API data, caching, and updates
* **React Hook Form** – for form handling and validation
* **Axios** – for making API requests
* **Tailwind CSS** – for styling and responsive design
* **JSON Server** – for creating a mock backend

---

## Mock Data Approach

Since this project does not use a real backend, I used **JSON Server** to simulate API endpoints.

* A `db.json` file is used as the database
* It contains:

  * `snacks`
  * `students`
  * `orders`

The frontend interacts with this mock backend using REST APIs such as:

* `GET /snacks`
* `GET /students`
* `POST /students`
* `POST /orders`
* `PATCH /students/:id`
* `PATCH /snacks/:id`

When an order is placed:

* A new order is added to the database
* The selected student’s `totalSpent` is updated
* The snack’s `ordersCount` is incremented

This approach helps simulate a real-world backend without needing a full server setup.

---

## Summary

This project demonstrates:

* Clean component structure
* Proper API integration
* State management using React Query
* Form handling and validation
* A simple but functional user experience

---
