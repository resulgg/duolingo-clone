# Lingo - Language Learning Platform

A modern language learning platform inspired by Duolingo, built with Next.js 14 and TypeScript. Learn new languages through interactive lessons, track your progress, and master vocabulary and grammar with a beautiful, user-friendly interface.

## Features

- 🌍 Multiple language courses (Spanish, Italian, French, Croatian)
- 👤 User authentication and profiles with Clerk
- 📚 Structured learning units and lessons
- 💫 Interactive challenges and quizzes
- ❤️ Hearts/lives system for learning sessions
- 📊 Progress tracking and statistics
- 🎯 Daily quests and achievements
- 💳 Premium subscription support with Stripe
- 🌓 Light/dark mode support
- 📱 Fully responsive design

## Tech Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Database**: NeonDB (Postgres) with Drizzle ORM
- **Authentication**: Clerk
- **Payments**: Stripe
- **State Management**: Zustand
- **UI Components**: Radix UI
- **Deployment**: Docker ready

## Getting Started

### Prerequisites

- Node.js 21 or later
- npm/yarn
- PostgreSQL database (or NeonDB account)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/lingo.git
cd lingo
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```
Fill in your environment variables in the `.env` file.

4. Set up the database:
```bash
npm run db:push
npm run db:seed
```

5. Start the development server:
```bash
npm run dev
```

The application will be available at http://localhost:3000.

### Docker Deployment

To run the application using Docker:

```bash
docker compose up --build
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
