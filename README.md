# MediBot Dashboard

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/8876afb4-41ba-4ef0-a53f-52d265734f57

## How to Fork and Run Locally

**Prerequisites:**
- [Node.js](https://nodejs.org/) installed
- A Google Gemini API Key (Get one from [Google AI Studio](https://aistudio.google.com/app/apikey))

### 1. Clone the repository

If you haven't forked the repository yet, click the **Fork** button at the top right of the GitHub page. Then clone your fork:

```bash
git clone https://github.com/YOUR_USERNAME/medibot-dashboard.git
cd medibot-dashboard
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up Environment Variables

Rename the `.env.example` file to `.env` (or create a new `.env` file) and add your Gemini API key:

```env
GEMINI_API_KEY="your_api_key_here"
```

### 4. Run the app

```bash
npm run dev
```

The app will start on your local development server (usually `http://localhost:5173`).
