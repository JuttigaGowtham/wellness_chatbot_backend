import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = process.env.GEMINI_API_KEY || "AIzaSyBTTmXsl7oYjfj5RNQ08A1Xe4yIWlE8hRY";
const genAI = new GoogleGenerativeAI(API_KEY);

export const handleChat = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `You are a mental wellness chatbot. Your ONLY purpose is to answer questions related to mental wellness, psychology, therapy, emotional support, and mental health. 
If the user asks ANY question that is NOT related to mental wellness (e.g., programming, math, general knowledge, etc.), you must politely decline to answer by saying: "I am a mental wellness chatbot and can only assist with questions related to mental health and well-being."

User's message: "${message}"`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    res.status(200).json({ reply: text });
  } catch (error) {
    console.error("Chat API Error:", error);
    res.status(500).json({ error: "Failed to process chat message" });
  }
};
