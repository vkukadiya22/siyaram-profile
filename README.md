# Siyaram Profile Enterprise Website & Architecture

A production-grade, enterprise web application built for **Siyaram Profile** (Precision Engineering & Profile Cutting in Bhavnagar, Gujarat).

---

## Technical Stack

- **Frontend**: Next.js 14+ (App Router), React 18, TypeScript, Tailwind CSS, Framer Motion, Google Material Symbols
- **Backend**: Django 5.0, Django REST Framework, Gunicorn
- **Database**: PostgreSQL
- **DevOps**: Docker, Docker Compose, Nginx Reverse Proxy, GitHub Actions CI/CD

---

## Directory Structure

```
siyaram profile/
├── frontend/             # Next.js 14 App Router codebase
│   ├── src/
│   │   ├── app/          # 14 Production-ready Pages
│   │   ├── components/   # Reusable UI & Section Components
│   │   ├── lib/          # Data Constants & Metadata Helper
│   ├── tailwind.config.ts
│   ├── tsconfig.json
│   └── Dockerfile
├── backend/              # Django REST API service
│   ├── siyaram_backend/  # Core Django configuration
│   ├── api/              # Models, Views, Serializers, Admin
│   ├── manage.py
│   └── Dockerfile
├── nginx/                # Nginx reverse proxy configuration
├── docker-compose.yml    # Multi-container orchestration
└── .github/workflows/    # Automated CI/CD pipeline
```

---

## Running Locally

### Option A: Docker Compose (Recommended)
```bash
docker-compose up --build
```
- Frontend: `http://localhost:3000`
- Nginx Gateway: `http://localhost`
- Django API: `http://localhost:8000/api/`

### Option B: Manual Setup
#### 1. Frontend:
```bash
cd frontend
npm install
npm run dev
```

#### 2. Backend:
```bash
cd backend
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver 0.0.0.0:8000
```
