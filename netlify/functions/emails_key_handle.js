export async function handler(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      publicKey: process.env.EMAILJS_PUBLIC_KEY,
      serviceID: process.env.EMAILJS_SERVICE_ID,
      templateID: process.env.EMAILJS_TEMPLATE_ID,
    }),
  };
}
