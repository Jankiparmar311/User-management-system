🚀 User Management System — React CRUD Application

A React-based CRUD web application to manage user data using a REST API.
The application is designed with future extensibility, allowing new fields to be added with minimal code changes.

🌐 Live Demo

Frontend Application
👉 https://user-management-system-eta-two.vercel.app/

Backend API
👉 https://user-crud-backend-4bl5.onrender.com/users

📂 Source Code Repositories
Layer	Repository
- Frontend	https://github.com/Jankiparmar311/User-management-system
- Backend API	https://github.com/Jankiparmar311/user-crud-backend

✅ Features Implemented

- Create users
- List users
- Update user details
- Delete users with confirmation modal
- Form validation
- Search users
- Toast success & error notifications
- Responsive UI layout
- Extensible form architecture

🧱 Tech Stack
- Frontend
- React (Vite)
- Tailwind CSS
- Formik
- Yup validation
- Axios
- React Toastify
- Backend
- JSON Server
- Hosted on Render

🔧 Extensibility — Adding New Fields
- The form is configuration-driven.
- To add a new field:
  Add field configuration in:
  config/formField.js
  Add validation rule in validation schema.
  No UI changes required since form renders dynamically.
  Example future fields:
  Date of Birth, Address, Company Name, Role

🎨 UI/UX Decisions
- Clean minimal interface
- Modal-based add/edit workflow
- Search filtering
- Confirmation before deletion
- Loading & error feedback
- Mobile-friendly layout

🚀 Deployment
- Service	Platform
- Frontend	Vercel
- Backend	Render
  
📌 Assumptions
- Authentication not required.
- Pagination skipped as not required in test task.
- JSON Server used as mock backend.

📬 Submission Notes
   This project focuses on:
- Clean React architecture
- Extensible design
- Good UX
- Maintainable code

Proper API integration
