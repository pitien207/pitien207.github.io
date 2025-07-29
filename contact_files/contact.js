function sendMail(event) {
  event.preventDefault();

  const data = {
    name: document.getElementById("sender_name").value,
    message: document.getElementById("sender_message").value,
    title: document.getElementById("sender_title").value,
    email: document.getElementById("sender_email").value,
  };

  fetch(
    "https://nghiawebsite.netlify.app/.netlify/functions/emails_key_handle",
    {
      method: "POST",
      body: JSON.stringify(data),
    }
  )
    .then((res) => res.json())
    .then((result) => {
      if (result.success) {
        alert("Your message has been sent successfully!");
        document.getElementById("sender_name").value = "";
        document.getElementById("sender_message").value = "";
        document.getElementById("sender_title").value = "";
        document.getElementById("sender_email").value = "";
      } else {
        throw new Error(result.error);
      }
    })
    .catch((error) => {
      console.error("Failed to send message:", error);
      alert("There was an error sending your message. Please try again.");
    });
}
