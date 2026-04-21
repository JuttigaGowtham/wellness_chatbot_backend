import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = "AIzaSyBTTmXsl7oYjfj5RNQ08A1Xe4yIWlE8hRY";
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function run() {
  try {
    const result = await model.generateContent("hello");
    console.log(result.response.text());
  } catch(e) {
    console.error(e);
  }
}
run();
