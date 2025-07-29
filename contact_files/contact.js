const script = document.createElement("script");
script.type = "text/javascript";
script.src =
  "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";

script.onload = async () => {
  // Fetch key từ Netlify Function
  try {
    const response = await fetch(
      "https://nghiawebsite.netlify.app/.netlify/functions/emails_key_handle"
    );
    const keys = await response.json();

    emailjs.init({
      publicKey: keys.publicKey,
    });

    // Gán hàm gửi khi submit form (ví dụ)
    document
      .getElementById("contact-form")
      .addEventListener("submit", (event) => {
        event.preventDefault();
        sendMail(keys.serviceID, keys.templateID);
      });
  } catch (err) {
    console.error("Failed to load EmailJS keys:", err);
  }
};

document.head.appendChild(script);

function sendMail(serviceID, templateID) {
  emailjs
    .send(serviceID, templateID, {
      name: document.getElementById("sender_name").value,
      message: document.getElementById("sender_message").value,
      title: document.getElementById("sender_title").value,
      email: document.getElementById("sender_email").value,
    })
    .then(function () {
      alert("Your message has been sent successfully!");

      // Clear the input fields
      document.getElementById("sender_name").value = "";
      document.getElementById("sender_message").value = "";
      document.getElementById("sender_title").value = "";
      document.getElementById("sender_email").value = "";
    })
    .catch(function (error) {
      console.error("Failed to send message:", error);
      alert("There was an error sending your message. Please try again.");
    });
}
