# Integrated Service Platform

## Overview
A full‑stack web platform that integrates three core services:
- **Education** – teacher and student registration, profile management, and teacher search.
- **Room Rental** – property owners can list rooms, tenants can search and view listings.
- **Domestic Help** – workers and employers can create profiles and find matches.

An admin panel provides management of users, listings, and complaints.

## Folder Structure
```
Integrated-Service-Platform/
├─ frontend/            # Static HTML, CSS & vanilla JS
├─ backend/             # Node.js + Express API
├─ .gitignore
└─ README.md            # You are reading it!
```

## Setup
1. **Clone / copy the repository**
2. **Install backend dependencies**
   ```powershell
   cd backend
   npm install
   ```
3. **Create a MongoDB database** (local or Atlas) and set the connection string in `backend/.env`:
   ```dotenv
   MONGODB_URI=mongodb://localhost:27017/integrated_service_platform
   PORT=5000
   ```
4. **Run the development server**
   ```powershell
   npm run dev   # Uses nodemon
   ```
   The server serves the static frontend from `frontend/` and exposes API routes under `/api/*`.

5. Open a browser and navigate to `http://localhost:5000`.

## Development
- Add route handlers, controllers, and models under `backend/` following the existing modular pattern.
- Frontend pages are plain HTML linked with CSS in `frontend/css/` and JavaScript in `frontend/js/`.
- Static assets (images, icons, fonts) belong in `frontend/assets/`.

## Scripts
- `npm start` – Starts the server with `node backend/server.js`.
- `npm run dev` – Starts the server with `nodemon` for hot‑reloading during development.

## License
MIT
