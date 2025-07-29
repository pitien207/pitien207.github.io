export async function handler(event, context) {
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "https://pitien207.github.io/", // Hoặc chỉ định GitHub Pages domain nếu muốn chặt hơn
      "Access-Control-Allow-Methods": "GET",
    },
    body: JSON.stringify({
      publicKey: process.env.EMAILJS_PUBLIC_KEY,
      serviceID: process.env.EMAILJS_SERVICE_ID,
      templateID: process.env.EMAILJS_TEMPLATE_ID,
    }),
  };
}
