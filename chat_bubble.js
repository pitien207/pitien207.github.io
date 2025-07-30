document.addEventListener("DOMContentLoaded", () => {
  const quotes1 = [
    "Mỗi dòng code là một bước xây nên thế giới bạn muốn tạo ra.",
    "Code is like humor. When you have to explain it, it’s bad. – Cory House",
    "In der IT gibt es keine Probleme – nur Herausforderungen und Lösungen.",
    "Công nghệ không phải là tương lai – nó là hiện tại đang diễn ra từng giây.",
    "The best error message is the one that never shows up.",
    "Không phải cứ biết nhiều ngôn ngữ lập trình là giỏi, mà là biết chọn đúng công cụ cho đúng vấn đề.",
    "First, solve the problem. Then, write the code. – John Johnson",
    "IT là nơi mỗi ngày đều phải học lại để không bị bỏ lại phía sau.",
    "In der Welt der Technik ist Stillstand der erste Schritt zum Rückschritt.",
    "Stay curious, keep learning — that’s the real power in tech.",
  ];
  const quotes2 = [
    "Cuộc sống là để tận hưởng, không phải để tồn tại.",
    "Life is short. Take the trip. Buy the shoes. Eat the cake.",
    "Reisen ist die einzige Sache, die man kauft und die einen reicher macht.",
    "Mỗi hành trình là một câu chuyện, và bạn chính là nhân vật chính.",
    "Collect moments, not things.",
    "Hãy sống như thể hôm nay là ngày cuối cùng được tự do bay nhảy.",
    "The world is wide, and I want to make some memories in every corner of it.",
    "Làm điều mình yêu, đến nơi mình thích — đó mới là sống.",
    "Abenteuer beginnen, wo Pläne enden.",
    "Good vibes only — because life’s too beautiful to waste on worries.",
  ];

  let currentIndex = 0;
  let chatTimeout;

  // Hàm xử lý khi click ảnh
  function handleClick(section, img, quotes) {
    // Xóa bubble cũ nếu có
    const existingBubble = document.querySelector(".chat-bubble");
    if (existingBubble) {
      clearTimeout(chatTimeout);
      existingBubble.remove();
    }

    // Tạo bubble mới
    const chatBubble = document.createElement("div");
    chatBubble.className = "chat-bubble";
    chatBubble.innerHTML = `${quotes[currentIndex]}`;
    currentIndex = (currentIndex + 1) % quotes.length;

    section.appendChild(chatBubble);

    // Vị trí tương đối với ảnh
    const offsetTop = img.offsetTop;
    const offsetLeft = img.offsetLeft + img.offsetWidth + 10;

    chatBubble.style.position = "absolute";
    chatBubble.style.top = offsetTop + "px";
    chatBubble.style.left = offsetLeft + "px";

    chatTimeout = setTimeout(() => {
      chatBubble.remove();
    }, 5000);
  }

  // Thiết lập cho ảnh profile
  const profileSection = document.querySelector("#profile");
  const profilePic = document.querySelector("#profile-pic");
  if (profileSection && profilePic) {
    profilePic.addEventListener("click", () =>
      handleClick(profileSection, profilePic, quotes1)
    );
  } else {
    console.error("Không tìm thấy phần tử ảnh hoặc section profile!");
  }

  // Thiết lập cho ảnh about
  const aboutSection = document.querySelector("#about");
  const aboutPic = aboutSection?.querySelector(".about-pic");
  if (aboutSection && aboutPic) {
    aboutPic.addEventListener("click", () =>
      handleClick(aboutSection, aboutPic, quotes2)
    );
  } else {
    console.error("Không tìm thấy phần tử ảnh hoặc section about!");
  }
});
