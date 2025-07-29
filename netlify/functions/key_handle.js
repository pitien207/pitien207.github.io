export async function handler(event) {
  const API_KEY = process.env.GEMINI_API_KEY;

  // ✅ Bước 1: Xử lý preflight (OPTIONS request)
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "https://pitien207.github.io/", // 🔒 Đổi thành domain bạn muốn nếu cần
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
      },
      body: "OK",
    };
  }

  try {
    // ✅ Bước 2: Xử lý POST request
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
      headers: {
        "Access-Control-Allow-Origin": "https://pitien207.github.io/", // 🔒 Hoặc "https://yourusername.github.io"
      },
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error("Error from Gemini API:", error);
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
}
