# Yash Rana - Full-Stack Portfolio

## What's inside
- React + TypeScript + Tailwind + Framer Motion frontend
- Flask + SQLite backend with contact API and optional SMTP notifications
- Resume PDF served from the frontend `public/` directory

## Local setup

### Backend (Flask)
1. `cd backend`
2. `python -m venv .venv`
3. `./.venv/Scripts/activate`
4. `pip install -r requirements.txt`
5. `python app.py`

Backend runs at `http://localhost:5050`.

### Frontend (Vite)
1. `cd frontend`
2. `npm install`
3. `npm run dev`

Frontend runs at `http://localhost:5173`.

## Environment variables

### Backend (`backend/.env` or platform env vars)
- `PORT` (default: 5050)
- `FRONTEND_ORIGIN` (e.g. `http://localhost:5173`)
- `DB_PATH` (optional, default: `backend/messages.db`)

Optional SMTP (send contact notifications if all are set):
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `SMTP_FROM`
- `CONTACT_TO`

### Frontend (`frontend/.env`)
- `VITE_API_BASE` (default fallback: `http://localhost:5050`)

## Deployment

### Frontend on Vercel
1. Import the `frontend` folder as a Vercel project.
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Set env var: `VITE_API_BASE` to your backend URL (e.g. `https://your-backend.onrender.com`).

### Backend on Render
1. Create a new Web Service from the `backend` folder.
2. Build command: `pip install -r requirements.txt`
3. Start command: `python app.py`
4. Set env vars: `PORT`, `FRONTEND_ORIGIN`, and optional SMTP vars.

### Backend on Fly.io (alternative)
1. Create an app and set the working directory to `backend`.
2. Set env vars: `PORT`, `FRONTEND_ORIGIN`, optional SMTP vars.
3. Run `fly deploy`.

## API endpoints
- `GET /api/health`
- `GET /api/profile`
- `GET /api/projects`
- `POST /api/contact`

## Resume download
The resume is served from `frontend/public/resume.pdf` and linked on the site.
