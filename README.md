# Socratic Tutor - AI-Powered Learning by Questioning

[![Node.js](https://img.shields.io/badge/Node.js-v20-green)](https://nodejs.org)
[![Express](https://img.shields.io/badge/Express-4.18-blue.svg)](https://expressjs.com/)
[![Groq](https://img.shields.io/badge/Groq-Llama%203.3-orange)](https://groq.com)

## 🚀 Overview

**Socratic Tutor** is a web-based AI tutor that implements the [Socratic method](https://en.wikipedia.org/wiki/Socratic_method) using Groq's fast inference API with Llama 3.3 70B model. Instead of giving direct answers, the tutor guides users to discover concepts themselves through targeted questions, fostering deep understanding.

Perfect for students, programmers, and lifelong learners tackling topics like algorithms, CS fundamentals, React, Big O, etc.

**Key Philosophy**: "Don't ask for answers. Ask better questions."

## ✨ Features

- **Interactive Chat UI**: Clean, responsive design with message bubbles.
- **Topic Quick-Starts**: Pre-loaded pills (BFS vs DFS, Dynamic Programming, React Hooks, Big-O, BST, Async/Await, CAP Theorem).
- **Strict Socratic Prompting**: Enforced rules - **NEVER** reveals answers, uses scaffolding questions, warm tone.
- **Session Management**: Reset for new topics, history maintained per session.
- **Fast Responses**: Powered by Groq's high-speed Llama model.
- **Local Development**: Simple Node.js/Express backend.

## 🏗️ Architecture

```
┌─────────────────┐    POST /api/chat    ┌─────────────────┐    Groq API
│   Frontend      │ ────────────────────> │   Backend       │ ────────────────────>
│ (HTML/CSS/JS)   │                      │ (Express/Node)  │                      │ (Llama 3.3)
│                 │ <──────────────────── │                 │ <────────────────── │
│ • Chat UI       │     JSON {reply}     │ • API Proxy     │     Chat Completion│
│ • Topic Pills   │                      │ • dotenv        │                      │
│ • System Prompt │                      │ • Static Serve  │                      │
└─────────────────┘                      └─────────────────┘                      └──────────────┘
```

- **Frontend**: Single-page app (index.html + embedded JS). Handles UI, sends chat history to backend.
- **Backend**: Express server proxies requests to Groq `/openai/v1/chat/completions`, injects Socratic system prompt.
- **AI Model**: `llama-3.3-70b-versatile` (temp 0.7, max 600 tokens).
- **Security**: API key in `.env` (never exposed to client).

## 🛠️ Tech Stack

| Component    | Technology          |
|--------------|---------------------|
| Backend      | Node.js, Express   |
| Frontend     | HTML5, CSS3, Vanilla JS |
| AI Inference | Groq API (Llama 3.3) |
| Styling      | Custom CSS (style.css) |
| Icons        | favicon.png        |
| Environment  | dotenv             |

## 📁 Project Structure

```
AI Tutor with Socratic Method/
├── index.html      # Frontend UI + Client JS logic
├── style.css       # Responsive styling
├── server.js       # Express backend + Groq proxy
├── package.json    # Dependencies & scripts
├── package-lock.json
├── .env            # GROQ_API_KEY (add this)
├── .gitignore
├── README.md       # This file!
├── TODO.md         # Progress tracker
├── favicon.png
└── document.docx   # ? (unused)
```

## ⚡ Quick Start

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Get Groq API Key**:
   - Sign up at [console.groq.com](https://console.groq.com)
   - Create `.env`:
     ```
     GROQ_API_KEY=your_key_here
     PORT=3000  # optional
     ```

3. **Run the Server**:
   ```bash
   npm start
   ```
   Opens at `http://localhost:3000`

4. **Start Learning**:
   - Pick a topic pill or type your question.
   - Experience pure Socratic questioning!

## 📖 Usage Examples

- **User**: "Explain BFS vs DFS"
  - **Tutor**: "What do you think is the key difference in how they explore a graph?"

- **Stuck?** Tutor scaffolds: "Think about a family tree - how would you visit everyone level by level vs deepest first?"

- **Correct Answer**: Tutor confirms, explains *why*, suggests deeper challenges.

## 🔧 Customization

- **Change Model**: Edit `server.js` model to other Groq options (e.g., `mixtral-8x7b-32768`).
- **New Topics**: Add pills in `index.html` `<span class="pill" data-q="Your question">Label</span>`.
- **Prompt Tweaks**: Modify `SYSTEM_PROMPT` in `index.html`.
- **Temperature**: Adjust in `server.js` (0.7 = creative questions).

## ⚠️ Limitations & TODO

- **No Persistence**: Sessions reset on refresh (add localStorage/DB).
- **Rate Limits**: Respect Groq free tier limits.
- **Single Language**: English only.
- **Future**:
  - Multi-session history.
  - User auth.
  - More models/prompts.
  - Docker deployment.
  - Tests.

## 🤝 Contributing

1. Fork & clone.
2. `npm install`.
3. Edit, test locally.
4. PR to `main`.

## 📄 License

MIT - Free to use/modify.

**Built with ❤️ for curious minds.**

