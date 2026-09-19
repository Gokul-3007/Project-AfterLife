# Project Afterlife – Beyond the Hackathon

Hackathons should not have an ending.

## Project Afterlife

Project Afterlife is an AI-powered student innovation ecosystem that helps promising hackathon projects move beyond evaluation into mentoring, collaboration, pilot deployment, and real-world impact.

## Problem

Many student projects die after a hackathon because they lose momentum, lack connections, or are unable to identify the right next step.

## Solution

The platform helps students submit projects, analyze them with AI, generate a clear project DNA, discover relevant mentors and industries, coordinate collaboration requests, and track project progress through a guided lifecycle.

## Product Message

- Every hackathon project deserves a second chance.
- From prototype to possibility.
- Don't let great ideas die after the hackathon.

## Features

- Student project submission workflow
- AI-based mock analysis with deterministic scoring
- Project DNA generation
- Smart matching for mentors and industries
- Collaboration request flow
- Notifications and messaging
- Admin dashboard and analytics
- Demo mode for local presentation without backend dependencies

## Tech Stack

- Frontend: React, Vite, Tailwind CSS, React Router
- Backend: Node.js, Express.js
- Data: MongoDB with Mongoose (optional in demo mode)
- Auth: JWT + bcryptjs
- AI: mock service abstraction with OpenAI-compatible-ready structure

## Project Structure

```text
project-afterlife/
├── frontend/
├── backend/
├── README.md
├── .gitignore
├── package.json
└── ...
```

## Local Setup

1. Install dependencies at the root:
   npm install
2. Start both apps:
   npm run dev

## Demo Accounts

- Student: student@afterlife.demo / Demo@123
- Mentor: mentor@afterlife.demo / Demo@123
- Industry: industry@afterlife.demo / Demo@123
- Admin: admin@afterlife.demo / Demo@123

## Environment Variables

See `.env.example` files in frontend and backend.

## Deployment Notes

- Frontend can be deployed to Vercel
- Backend can be deployed to Render
- MongoDB can be connected via MongoDB Atlas

## Future Improvements

- Real AI integration with OpenAI or Azure OpenAI
- Production MongoDB data persistence
- Real-time notifications and messaging
- Advanced recommendation engine
- Institutional workflows and grant pipelines

## Team

- Product Strategy
- Full Stack Engineering
- AI & Data
- UX / Design
- Growth & Partnerships

## Screenshots

Placeholder for screenshots and demo captures.
