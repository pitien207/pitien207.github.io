export async function handler(event) {
  const API_KEY = process.env.GEMINI_API_KEY;

  const requestBody = JSON.parse(event.body);

  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${API_KEY}`;

  const response = await fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(requestBody),
  });

  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
}
