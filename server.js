require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();

/* ---------------- CORS (HARD FIX) ---------------- */
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://socratictutorr.netlify.app");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});

/* ---------------- BODY PARSING ---------------- */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* ---------------- ROUTE ---------------- */
app.post("/api/chat", async (req, res) => {
  const { messages } = req.body;

  if (!messages) {
    return res.status(400).json({ error: "messages required" });
  }

  try {
    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages,
          temperature: 0.7,
          max_tokens: 600,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ error: data });
    }

    res.json({
      reply: data.choices?.[0]?.message?.content || "",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* ---------------- START SERVER ---------------- */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});