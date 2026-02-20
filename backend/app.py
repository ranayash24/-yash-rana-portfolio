from __future__ import annotations

import os
import re
import sqlite3
from datetime import datetime
from email.message import EmailMessage
import smtplib

from flask import Flask, jsonify, request
from flask_cors import CORS

APP_DIR = os.path.dirname(os.path.abspath(__file__))
DB_PATH = os.getenv("DB_PATH", os.path.join(APP_DIR, "messages.db"))

EMAIL_REGEX = re.compile(r"^[^\s@]+@[^\s@]+\.[^\s@]+$")


def init_db() -> None:
    with sqlite3.connect(DB_PATH) as conn:
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS messages (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                email TEXT NOT NULL,
                subject TEXT NOT NULL,
                message TEXT NOT NULL,
                created_at TEXT NOT NULL
            )
            """
        )
        conn.commit()


def get_profile() -> dict:
    summary = [
        "Motivated and detail-oriented Software Developer with a background in computer science since 2020, delivering in deadline-driven environments with a patient, methodical approach to problem-solving.",
        "Able to quickly pick up new tools and platforms, work independently or in cross-functional teams, and contribute to both research work and production-grade systems.",
    ]

    return {
        "name": "Yash Vinaychandra Rana",
        "title": "Software Developer",
        "location": "Montreal, QC",
        "email": "yashrana2402@gmail.com",
        "phone": "(438) 836-5297",
        "linkedin": "https://www.linkedin.com/in/yash-rana-a5b4b9214/",
        "github": "https://github.com/ranayash24",
        "summary": summary,
        "about": summary,
        "education": [
            {
                "institution": "Concordia University",
                "degree": "Master of Applied Computer Science (MApCompSc)",
                "location": "Montreal, QC",
                "dates": "Sep 2024 -- May 2026",
            },
            {
                "institution": "Gujarat Technological University",
                "degree": "Bachelor of Engineering in Computer Engineering",
                "location": "Gujarat, India",
                "dates": "Sep 2020 -- Apr 2024",
            },
        ],
        "experience": [
            {
                "company": "Blue Data Consulting",
                "role": "Data Science Intern",
                "location": "Remote",
                "dates": "Dec 2023 -- Jun 2024",
                "highlights": [
                    "Accomplished an end-to-end AI content generation system converting client descriptions into structured text, audio, and video outputs using LLMs, LangChain, and Azure Cognitive Services for multimodal automation.",
                    "Engineered a production text-to-speech and video generation workflow with Azure Speech + Video Indexer APIs, cutting generation time from 25 to 8 minutes (-68%) while maintaining 92% accuracy in tone and context.",
                    "Integrated feedback-driven prompt refinement and automated quality scoring, improving generative consistency by 30% across production use cases.",
                ],
            },
            {
                "company": "ShapeAI",
                "role": "Full Stack Developer Intern",
                "location": "Remote",
                "dates": "Jun 2023 -- Nov 2023",
                "highlights": [
                    "Delivered a MERN-stack portal for an ed-tech client, centralizing student project submissions and analytics; active users grew from 120 to 220 (+83%) after introducing interactive dashboards.",
                    "Built secure React.js + Node.js/Express APIs with JWT authentication, validation middleware, and optimized routing logic, reducing backend and form errors by 45% while improving data integrity.",
                    "Optimized front-end architecture with modular React hooks, lazy loading, and advanced caching techniques, improving load speed by 40% and deployment turnaround by 25% across environments.",
                ],
            },
        ],
        "skills": {
            "Languages": [
                "Python",
                "Java",
                "JavaScript",
                "TypeScript",
                "SQL",
                "C",
                "HTML5",
                "CSS",
            ],
            "Frameworks": [
                "FastAPI",
                "Spring Boot",
                "React",
                "Next.js",
                "Node.js",
                "Flask",
                "Express",
                "React Native",
            ],
            "Machine Learning & AI": [
                "scikit-learn",
                "TensorFlow",
                "XGBoost",
                "LSTM",
                "LangChain",
                "Pandas",
                "NumPy",
                "Matplotlib",
                "Seaborn",
            ],
            "Cloud / Tools": [
                "AWS",
                "Azure",
                "Google Cloud",
                "Docker",
                "Git",
                "Jira",
                "Postman",
                "PowerBI",
                "Vercel",
                "Streamlit",
            ],
            "Databases": [
                "MySQL",
                "PostgreSQL",
                "Firebase",
                "Supabase",
                "Prisma",
                "MongoDB",
            ],
            "Other Expertise": [
                "Distributed Systems",
                "API Design",
                "Data Visualization",
                "Time-Series Forecasting",
                "LLM Integration",
            ],
        },
    }


def get_projects() -> list[dict]:
    return [
        {
            "name": "Early Detection of Diabetes using Machine Learning",
            "description": "Published in Atlantis Press (ICAA AI 2025), presenting an SVM-based diagnostic model achieving 95% accuracy for early-stage diabetes prediction.",
            "stack": ["Python", "SVM", "scikit-learn"],
            "links": [
                {
                    "label": "Published Paper",
                    "url": "https://www.atlantis-press.com/proceedings/icaaai-25/126012636",
                }
            ],
            "categories": ["AI/ML", "Research"],
        },
        {
            "name": "F1 Vision",
            "description": "Built a full-stack F1 race intelligence platform with live telemetry ingestion, Gradient Boosting-based race outcome prediction, driver/team comparison analytics, and LLM-generated strategy insights and summaries.",
            "stack": ["FastAPI", "Python", "Next.js", "ML", "LLMs"],
            "links": [
                {
                    "label": "Source Code",
                    "url": "https://github.com/ranayash24/f1-vision",
                }
            ],
            "categories": ["Full-stack", "AI/ML", "Data"],
        },
        {
            "name": "Distributed Share Market System (DSMS)",
            "description": "Built a fault-tolerant replicated trading system using active replication, consensus, and autonomous recovery to ensure high availability under crash and Byzantine failures.",
            "stack": ["Java", "UDP", "Distributed Systems"],
            "links": [
                {
                    "label": "Source Code",
                    "url": "https://github.com/ranayash24/DSMS",
                }
            ],
            "categories": ["Distributed", "Systems"],
        },
        {
            "name": "Online Movie Ticket Booking System",
            "description": "Developed a full-stack ticket booking platform with authentication, real-time seat selection, and simulated secure payments backed by a Spring Boot + MySQL service layer.",
            "stack": ["React", "Spring Boot", "MySQL"],
            "links": [
                {
                    "label": "Source Code",
                    "url": "https://github.com/ranayash24/book-my-show",
                },
                {
                    "label": "Demo",
                    "url": "https://second-project-delta.vercel.app/",
                },
            ],
            "categories": ["Full-stack"],
        },
        {
            "name": "Task Tracker CLI",
            "description": "Command-line task tracker that stores tasks in a local JSON file, supports add/update/delete operations, and tracks status across todo, in-progress, and done.",
            "stack": ["CLI", "JSON", "File Storage"],
            "links": [
                {
                    "label": "Source Code",
                    "url": "https://github.com/ranayash24/Task_Tracker_CLI",
                }
            ],
            "categories": ["CLI", "Tooling"],
        },
        {
            "name": "Unit Converter (Convertify)",
            "description": "Full-stack unit converter with Spring Boot REST APIs and a React/Vite frontend for length, weight, and temperature conversions.",
            "stack": ["Spring Boot", "Java", "React", "Vite"],
            "links": [
                {
                    "label": "Source Code",
                    "url": "https://github.com/ranayash24/unit-converter",
                }
            ],
            "categories": ["Full-stack", "Web"],
        },
        {
            "name": "Fraud Detection",
            "description": "Fraud detection project (details available in the GitHub repository).",
            "stack": ["Machine Learning", "Data"],
            "links": [
                {
                    "label": "Source Code",
                    "url": "https://github.com/ranayash24/Fraud_detection",
                }
            ],
            "categories": ["AI/ML", "Data"],
        },
        {
            "name": "Style Fusion",
            "description": "Style fusion project (details available in the GitHub repository).",
            "stack": ["Machine Learning", "Creative Tech"],
            "links": [
                {
                    "label": "Source Code",
                    "url": "https://github.com/ranayash24/style_fusion",
                }
            ],
            "categories": ["AI/ML", "Creative"],
        },
    ]


def send_email_notification(payload: dict) -> None:
    smtp_host = os.getenv("SMTP_HOST")
    smtp_port = os.getenv("SMTP_PORT")
    smtp_user = os.getenv("SMTP_USER")
    smtp_pass = os.getenv("SMTP_PASS")
    smtp_from = os.getenv("SMTP_FROM")
    contact_to = os.getenv("CONTACT_TO")

    if not all([smtp_host, smtp_port, smtp_user, smtp_pass, smtp_from, contact_to]):
        return

    msg = EmailMessage()
    msg["Subject"] = f"Portfolio Contact: {payload['subject']}"
    msg["From"] = smtp_from
    msg["To"] = contact_to
    msg.set_content(
        "\n".join(
            [
                f"Name: {payload['name']}",
                f"Email: {payload['email']}",
                f"Subject: {payload['subject']}",
                "",
                payload["message"],
            ]
        )
    )

    with smtplib.SMTP(smtp_host, int(smtp_port)) as server:
        server.starttls()
        server.login(smtp_user, smtp_pass)
        server.send_message(msg)


def create_app() -> Flask:
    app = Flask(__name__)

    allowed_origins = os.getenv("FRONTEND_ORIGIN", "*")
    CORS(app, resources={r"/api/*": {"origins": allowed_origins}})

    init_db()

    @app.get("/api/health")
    def health() -> tuple[dict, int]:
        return {"ok": True}, 200

    @app.get("/api/profile")
    def profile() -> tuple[dict, int]:
        return jsonify(get_profile()), 200

    @app.get("/api/projects")
    def projects() -> tuple[dict, int]:
        return jsonify({"projects": get_projects()}), 200

    @app.post("/api/contact")
    def contact() -> tuple[dict, int]:
        if not request.is_json:
            return {"error": "Expected JSON body"}, 400

        payload = request.get_json(silent=True) or {}
        name = str(payload.get("name", "")).strip()
        email = str(payload.get("email", "")).strip()
        subject = str(payload.get("subject", "")).strip()
        message = str(payload.get("message", "")).strip()

        if not all([name, email, subject, message]):
            return {"error": "All fields are required"}, 400

        if not EMAIL_REGEX.match(email):
            return {"error": "Invalid email address"}, 400

        created_at = datetime.utcnow().isoformat() + "Z"

        try:
            with sqlite3.connect(DB_PATH) as conn:
                conn.execute(
                    "INSERT INTO messages (name, email, subject, message, created_at) VALUES (?, ?, ?, ?, ?)",
                    (name, email, subject, message, created_at),
                )
                conn.commit()
        except sqlite3.Error:
            return {"error": "Failed to save message"}, 500

        try:
            send_email_notification(
                {
                    "name": name,
                    "email": email,
                    "subject": subject,
                    "message": message,
                }
            )
        except Exception:
            # Email is optional; do not block the API if it fails.
            pass

        return {"ok": True}, 200

    return app


app = create_app()


if __name__ == "__main__":
    port = int(os.getenv("PORT", "5050"))
    app.run(host="0.0.0.0", port=port)
