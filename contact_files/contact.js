const script = document.createElement("script");
script.type = "text/javascript";
script.src =
  "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
script.onload = () => {
  // Khởi tạo EmailJS sau khi thư viện đã được tải
  emailjs.init({
    publicKey: "...",
  });
};

document.head.appendChild(script);

function sendMail() {
  event.preventDefault();
  emailjs
    .send("...", "...", {
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
