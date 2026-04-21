import fetch from "node-fetch"; // or built-in fetch if node 18+

const apiKey = "AIzaSyBTTmXsl7oYjfj5RNQ08A1Xe4yIWlE8hRY";

async function run() {
  try {
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
    const data = await res.json();
    console.log(data.models.map(m => m.name).slice(0, 10));
  } catch(e) {
    console.error(e);
  }
}
run();
