const bubbleQuotes = {
  en: {
    profile: [
      "Every line of code helps build the world you want to create.",
      "Code is like humor. When you have to explain it, it is bad. - Cory House",
      "In IT there are no dead ends, only challenges and solutions.",
      "Technology is not the future. It is the present happening every second.",
      "The best error message is the one that never shows up.",
      "Good engineering is choosing the right tool for the right problem.",
      "First, solve the problem. Then, write the code. - John Johnson",
      "Stay curious, keep learning, and keep moving forward.",
    ],
    about: [
      "Life is here to be enjoyed, not just endured.",
      "Life is short. Take the trip. Buy the shoes. Eat the cake.",
      "Travel is the only thing you buy that makes you richer.",
      "Every journey becomes a story, and you are the main character.",
      "Collect moments, not things.",
      "The world is wide, and every corner can hold a memory.",
      "Do what you love and go where you feel alive.",
      "Good vibes only, because life is too beautiful for constant worry.",
    ],
  },
  vi: {
    profile: [
      "Mỗi dòng code là một bước để tạo nên thế giới bạn muốn xây dựng.",
      "Code hay là code không cần giải thích quá nhiều.",
      "Trong CNTT không có ngõ cụt, chỉ có thử thách và lời giải.",
      "Công nghệ không phải là tương lai, nó là hiện tại đang diễn ra từng giây.",
      "Thông báo lỗi tốt nhất là thông báo không bao giờ xuất hiện.",
      "Kỹ sư giỏi là người chọn đúng công cụ cho đúng vấn đề.",
      "Giải quyết bài toán trước, rồi hãy viết code.",
      "Càng tò mò, càng học được nhiều điều mới.",
    ],
    about: [
      "Cuộc sống là để tận hưởng, không chỉ để tồn tại.",
      "Đời ngắn lắm, hãy đi, hãy sống và hãy trải nghiệm.",
      "Điều đáng giá nhất sau mỗi chuyến đi là kỷ niệm mang về.",
      "Mỗi hành trình đều là một câu chuyện của riêng bạn.",
      "Hãy gom góp khoảnh khắc thay vì chỉ gom đồ vật.",
      "Thế giới rộng lớn, và góc nào cũng có thể trở thành một ký ức đẹp.",
      "Làm điều mình yêu và đến nơi khiến mình thấy sống động.",
      "Giữ năng lượng tích cực, vì cuộc sống quá đẹp để chỉ lo lắng.",
    ],
  },
  de: {
    profile: [
      "Jede Zeile Code hilft dabei, die Welt zu bauen, die du erschaffen willst.",
      "Code ist wie Humor. Wenn man ihn erklären muss, ist er nicht gut.",
      "In der IT gibt es keine Sackgassen, nur Herausforderungen und Lösungen.",
      "Technologie ist nicht die Zukunft, sondern die Gegenwart.",
      "Die beste Fehlermeldung ist die, die nie erscheint.",
      "Gutes Engineering bedeutet, das richtige Werkzeug für das richtige Problem zu wählen.",
      "Erst das Problem lösen, dann den Code schreiben.",
      "Bleib neugierig, lerne weiter und entwickle dich jeden Tag.",
    ],
    about: [
      "Das Leben ist zum Genießen da, nicht nur zum Funktionieren.",
      "Das Leben ist kurz. Mach die Reise. Kauf die Schuhe. Iss den Kuchen.",
      "Reisen ist das Einzige, das man kauft und das einen reicher macht.",
      "Jede Reise wird zu einer Geschichte, und du bist die Hauptfigur.",
      "Sammle Momente, keine Dinge.",
      "Die Welt ist weit, und jede Ecke kann eine Erinnerung werden.",
      "Tu, was du liebst, und geh dorthin, wo du dich lebendig fühlst.",
      "Gute Energie nur, denn das Leben ist zu schön für dauernde Sorgen.",
    ],
  },
};

let currentBubbleIndex = 0;
let chatTimeout;

function getBubbleLanguage() {
  return window.getPortfolioLanguage?.() || "en";
}

function placeBubble(section, img, bubble) {
  const bubbleWidth = bubble.offsetWidth;
  const bubbleHeight = bubble.offsetHeight;
  const sectionWidth = section.clientWidth;
  const spacing = 16;
  const rightPosition = img.offsetLeft + img.offsetWidth + spacing;
  const fitsRight = rightPosition + bubbleWidth <= sectionWidth - spacing;
  const shouldPlaceBelow = window.innerWidth <= 768 || !fitsRight;

  if (shouldPlaceBelow) {
    const centeredLeft = img.offsetLeft + img.offsetWidth / 2 - bubbleWidth / 2;
    const safeLeft = Math.max(
      spacing,
      Math.min(centeredLeft, sectionWidth - bubbleWidth - spacing)
    );

    bubble.classList.add("chat-bubble--below");
    bubble.style.top = img.offsetTop + img.offsetHeight + spacing + "px";
    bubble.style.left = safeLeft + "px";
    return;
  }

  const safeTop = Math.max(
    img.offsetTop,
    img.offsetTop + (img.offsetHeight - bubbleHeight) / 2
  );

  bubble.classList.remove("chat-bubble--below");
  bubble.style.top = safeTop + "px";
  bubble.style.left = rightPosition + "px";
}

function handleClick(section, img, quoteGroup) {
  const existingBubble = document.querySelector(".chat-bubble");
  if (existingBubble) {
    clearTimeout(chatTimeout);
    existingBubble.remove();
  }

  const language = getBubbleLanguage();
  const quotes = bubbleQuotes[language]?.[quoteGroup] || bubbleQuotes.en[quoteGroup];
  const chatBubble = document.createElement("div");
  chatBubble.className = "chat-bubble";
  chatBubble.textContent = quotes[currentBubbleIndex];
  currentBubbleIndex = (currentBubbleIndex + 1) % quotes.length;

  section.appendChild(chatBubble);
  chatBubble.style.position = "absolute";
  placeBubble(section, img, chatBubble);

  chatTimeout = setTimeout(() => {
    chatBubble.remove();
  }, 5000);
}

document.addEventListener("DOMContentLoaded", () => {
  const profileSection = document.querySelector("#profile");
  const profilePic = document.querySelector("#profile-pic");
  if (profileSection && profilePic) {
    profilePic.addEventListener("click", () =>
      handleClick(profileSection, profilePic, "profile")
    );
  }

  const aboutSection = document.querySelector("#about");
  const aboutPic = aboutSection?.querySelector(".about-pic");
  if (aboutSection && aboutPic) {
    aboutPic.addEventListener("click", () =>
      handleClick(aboutSection, aboutPic, "about")
    );
  }
});
