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

    await getGeminiResponse(userMessage);
  }
}

function renderModelMessage(message) {
  document.querySelector(".chat-window .chat").insertAdjacentHTML(
    "beforeend",
    `
        <div class="model">
          <img src="./assets/chatbot_asset/robot_white.svg" alt="robot_icon" />
          <p>${message}</p>
        </div>
      `
  );
}

async function getGeminiResponse(userMessage) {
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

  try {
    const response = await fetch(
      "https://nghiawebsite.netlify.app/.netlify/functions/key_handle",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      }
    );

    const data = await response.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!response.ok || !text) {
      throw new Error("Invalid chatbot response");
    }

    renderModelMessage(text);
    return text;
  } catch (error) {
    console.error("Failed to fetch chatbot response:", error);
    const fallbackMessage =
      window.getPortfolioTranslation?.("chat.error") ||
      "Something went wrong. Please try again in a moment.";
    renderModelMessage(fallbackMessage);
    return fallbackMessage;
  } finally {
    document.querySelector(".loader")?.remove();
    scrollToBottom();
  }
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
