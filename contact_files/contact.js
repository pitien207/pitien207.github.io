async function sendMail(event) {
  event.preventDefault();

  const name = document.getElementById("sender_name").value;
  const message = document.getElementById("sender_message").value;
  const title = document.getElementById("sender_title").value;
  const email = document.getElementById("sender_email").value;

  try {
    const response = await fetch(
      "https://nghiawebsite.netlify.app/.netlify/functions/emails_key_handle",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, message, title, email }),
      }
    );

    const result = await response.json();

    if (response.ok) {
      alert("Your message has been sent successfully!");

      // Clear the input fields
      document.getElementById("sender_name").value = "";
      document.getElementById("sender_message").value = "";
      document.getElementById("sender_title").value = "";
      document.getElementById("sender_email").value = "";
    } else {
      console.error("Server error:", result);
      alert("There was an error sending your message. Please try again.");
    }
  } catch (error) {
    console.error("Network error:", error);
    alert("An unexpected error occurred. Please try again later.");
  }
}
