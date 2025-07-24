async function sendMessage() {
  const userMessage = document.querySelector(".chat-window input").value;
  if (userMessage.length) {
    document.querySelector(".chat-window input").value = "";
    document.querySelector(".chat-window .chat").insertAdjacentHTML(
      "beforeend",
      `
          <div class="user">
            <p>${userMessage}</p>
          </div>      
  
          `
    );

    // Hiển thị loader
    document
      .querySelector(".chat-window .chat")
      .insertAdjacentHTML("beforeend", `<div class="loader"></div>`);

    // Cuộn xuống cuối cùng
    scrollToBottom();

    const response = await getGeminiResponse(userMessage);
  }
}

async function getGeminiResponse(userMessage) {
  const apiKey = "AIzaSyBxht64B8uDtjSi5NWrmQT2F8sk8p2SYGg"; // Thay thế bằng API key của bạn
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${apiKey}`; // Giả sử đây là URL của API Gemini

  const requestBody = {
    contents: [
      {
        parts: [
          {
            text: userMessage,
          },
        ],
      },
    ],
    generationConfig: {
      temperature: 1,
      topK: 40,
      topP: 0.95,
      maxOutputTokens: 8192,
      responseMimeType: "text/plain",
    },
  };

  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  });

  const data = await response.json();

  // Xóa loader sau khi nhận phản hồi
  document.querySelector(".loader").remove();

  document.querySelector(".chat-window .chat").insertAdjacentHTML(
    "beforeend",
    `
        <div class="model">
          <img src="./assets/chatbot_asset/robot_white.svg" alt="robot_icon" />
          <p>${data.candidates[0].content.parts[0].text}</p>
        </div>      
      `
  );

  // Cuộn xuống cuối cùng
  scrollToBottom();

  return data.candidates[0].content.parts[0].text;
}

document
  .querySelector(".chat-window .input-area .send_button")
  .addEventListener("click", () => sendMessage());

document
  .querySelector(".chat-window input")
  .addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  });

/* Tự động scroll xuống dưới mỗi khi nhận tin nhắn */

function scrollToBottom() {
  const chatWindow = document.querySelector(".chat-window .chat");
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

/* handle emoji picker */
const picker = new EmojiMart.Picker({
  theme: "light",
  skinToneposition: "none",
  previewPosition: "none",

  onEmojiSelect: (emoji) => {
    document.querySelector(".chat-window input").value += emoji.native;
  },
});

document.querySelector(".input-area").appendChild(picker);

document
  .querySelector(".chat-window .input-area .smile_button")
  .addEventListener("click", () =>
    document.body.classList.toggle("show-emoji-picker")
  );

/* function toggleEmoji() {
  document.body.classList.toggle("show-emoji-picker");
} */

/* close emoji window when click on text area */
document
  .querySelector(".chat-window .input-area .input_typing")
  .addEventListener("click", () =>
    document.body.classList.remove("show-emoji-picker")
  );

/* open the chat window with popup button */

function toggleChat() {
  document.body.classList.toggle("show-chat-window");
}
