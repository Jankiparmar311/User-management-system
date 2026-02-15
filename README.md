User Management System — React CRUD App

This project is a simple React-based CRUD application for managing users. It allows creating, viewing, updating, and deleting users using a REST API.

The application is structured to allow easy future extensibility with minimal code changes when adding new fields.

Live Demo

Frontend:
https://user-management-system-eta-two.vercel.app/

Backend API:
https://user-crud-backend-4bl5.onrender.com/users

Repositories

Frontend Repository:
https://github.com/Jankiparmar311/User-management-system

Backend Repository:
https://github.com/Jankiparmar311/user-crud-backend

Features Implemented

Create user

View all users

Update user

Delete user

Form validation

Search users

Confirmation modal for deletion

Toast notifications

Responsive layout

Configuration-driven form fields

Extensible form architecture

Tech Stack

Frontend:

React

Tailwind CSS

Formik (form handling)

Yup validation

Axios

React Toastify

Backend:

JSON Server (mock REST API)

Deployed on Render

Project Structure

Frontend includes:

Reusable Modal component

Config-based form fields

API service layer

Clean component separation

Backend:

JSON Server using db.json

Hosted via Render

Setup Instructions (Frontend)

Install dependencies:

npm install

Run locally:

npm run dev

Backend Setup

Install dependencies:

npm install

Start API:

npm start

Runs JSON server using db.json.

Extensibility — Adding New Fields

To add a new field:

Add field configuration in:
config/formField.js

Add validation rule in validationSchema.

No changes required in UI or form logic since form renders dynamically from configuration.

Example additions:

Date of Birth

Address

Company

etc.

Assumptions / Decisions

JSON Server used as mock backend.

Authentication not required per assignment.

Pagination skipped as not required.

Focus placed on extensible architecture and clean UX.

Deployment

Frontend deployed using Vercel.
Backend deployed using Render.
