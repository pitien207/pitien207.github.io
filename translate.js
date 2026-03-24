const PORTFOLIO_LANGUAGE_KEY = "portfolio-language";
const SUPPORTED_LANGUAGES = ["vi", "en", "de"];

const LANGUAGE_META = {
  vi: {
    label: "Tiếng Việt",
    flag: "🇻🇳",
  },
  en: {
    label: "English",
    flag: "🇺🇸",
  },
  de: {
    label: "Deutsch",
    flag: "🇩🇪",
  },
};

const TRANSLATIONS = {
  en: {
    "page.title": "Pham Trong Nghia | Portfolio",
    "nav.homeAria": "Go to profile section",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "language.aria": "Choose website language",
    "profile.label": "Portfolio",
    "profile.greeting": "Hi, I'm Nghia Pham",
    "profile.role":
      "IT Administrator | Software Developer | Web Developer | IT Security Assistant",
    "profile.lead":
      "I build dependable digital experiences with a focus on clean interfaces, secure systems and practical problem solving.",
    "profile.location": "Based in Munich",
    "profile.open": "Open to opportunities",
    "profile.cv": "Download CV",
    "profile.hire": "Hire Me",
    "about.label": "Get to know more",
    "about.title": "About me",
    "about.experience.title": "Experience",
    "about.experience.body":
      "IT Administrator (1+ years) <br /> IT Security Assistant (1+ years) <br /> Software Developer & Web Developer (2+ years)",
    "about.education.title": "Education",
    "about.education.body": "B.Sc. Bachelor's Degree: Information Technology",
    "skills.title": "Skills",
    "skills.languages": "Languages",
    "skills.web": "Web",
    "skills.database": "Database",
    "skills.tools": "Tools",
    "projects.label": "Browse my Recent",
    "projects.title": "Projects",
    "projects.project1.title": "Turing machine simulator",
    "projects.project1.body":
      "A visual simulator for exploring states, transitions and machine logic in a clearer way.",
    "projects.project2.title": "Cloud with Raspberry Pi 5",
    "projects.project2.body":
      "A private cloud setup focused on self-hosted infrastructure, storage and hands-on system administration.",
    "projects.project3.title": "Android Application",
    "projects.project3.body":
      "A Kotlin-based mobile application built around a clean user flow and reliable app structure.",
    "projects.github": "Github",
    "projects.demo": "Live Demo",
    "contact.label": "Let's work together",
    "contact.title": "Contact",
    "contact.sectionTitle": "Contact Me",
    "contact.address.title": "My Address",
    "contact.address.body": "Munich, Germany",
    "contact.email.title": "Email Me",
    "contact.phone.title": "Call Me",
    "contact.social.title": "Social Space",
    "contact.messageTitle": "Leave a Message",
    "contact.namePlaceholder": "Your Name",
    "contact.emailPlaceholder": "Your Email",
    "contact.subjectPlaceholder": "Subject",
    "contact.messagePlaceholder": "Message",
    "contact.send": "Send Message",
    "contact.success": "Your message has been sent successfully!",
    "contact.error": "Failed to send message. Please try again.",
    "footer.copy": "Copyright © 2025 Nghia Pham. All Rights Reserved",
    "chat.title": "Chatbot",
    "chat.toggleAria": "Open chatbot",
    "chat.greeting": "Hi, how can I help you?",
    "chat.placeholder": "Type your message here...",
    "chat.error": "Something went wrong. Please try again in a moment.",
  },
  vi: {
    "page.title": "Phạm Trọng Nghĩa | Portfolio",
    "nav.homeAria": "Đi tới phần giới thiệu bản thân",
    "nav.about": "Giới thiệu",
    "nav.skills": "Kỹ năng",
    "nav.projects": "Dự án",
    "nav.contact": "Liên hệ",
    "language.aria": "Chọn ngôn ngữ trang web",
    "profile.label": "Portfolio",
    "profile.greeting": "Xin chào, mình là Nghia Pham",
    "profile.role":
      "Quản trị viên CNTT | Lập trình viên phần mềm | Lập trình viên web | Trợ lý an ninh CNTT",
    "profile.lead":
      "Mình xây dựng những trải nghiệm số đáng tin cậy, tập trung vào giao diện gọn gàng, hệ thống an toàn và cách giải quyết vấn đề thực tế.",
    "profile.location": "Làm việc tại Munich",
    "profile.open": "Sẵn sàng cho cơ hội mới",
    "profile.cv": "Tải CV",
    "profile.hire": "Liên hệ hợp tác",
    "about.label": "Tìm hiểu thêm",
    "about.title": "Về mình",
    "about.experience.title": "Kinh nghiệm",
    "about.experience.body":
      "Quản trị viên CNTT (1+ năm) <br /> Trợ lý an ninh CNTT (1+ năm) <br /> Lập trình viên phần mềm & web (2+ năm)",
    "about.education.title": "Học vấn",
    "about.education.body": "Cử nhân Công nghệ thông tin",
    "skills.title": "Kỹ năng",
    "skills.languages": "Ngôn ngữ",
    "skills.web": "Web",
    "skills.database": "Cơ sở dữ liệu",
    "skills.tools": "Công cụ",
    "projects.label": "Một số dự án gần đây",
    "projects.title": "Dự án",
    "projects.project1.title": "Mô phỏng máy Turing",
    "projects.project1.body":
      "Trình mô phỏng trực quan để khám phá trạng thái, chuyển tiếp và logic của máy dễ hiểu hơn.",
    "projects.project2.title": "Cloud với Raspberry Pi 5",
    "projects.project2.body":
      "Mô hình private cloud tập trung vào self-hosted infrastructure, lưu trữ và quản trị hệ thống thực tế.",
    "projects.project3.title": "Ứng dụng Android",
    "projects.project3.body":
      "Ứng dụng di động viết bằng Kotlin với luồng trải nghiệm rõ ràng và cấu trúc ổn định.",
    "projects.github": "Github",
    "projects.demo": "Xem demo",
    "contact.label": "Cùng làm việc nhé",
    "contact.title": "Liên hệ",
    "contact.sectionTitle": "Liên hệ với mình",
    "contact.address.title": "Địa chỉ",
    "contact.address.body": "Munich, Đức",
    "contact.email.title": "Email",
    "contact.phone.title": "Điện thoại",
    "contact.social.title": "Mạng xã hội",
    "contact.messageTitle": "Gửi lời nhắn",
    "contact.namePlaceholder": "Tên của bạn",
    "contact.emailPlaceholder": "Email của bạn",
    "contact.subjectPlaceholder": "Chủ đề",
    "contact.messagePlaceholder": "Nội dung tin nhắn",
    "contact.send": "Gửi tin nhắn",
    "contact.success": "Tin nhắn của bạn đã được gửi thành công!",
    "contact.error": "Không thể gửi tin nhắn. Vui lòng thử lại.",
    "footer.copy": "Bản quyền © 2025 Nghia Pham. Mọi quyền được bảo lưu",
    "chat.title": "Chatbot",
    "chat.toggleAria": "Mở chatbot",
    "chat.greeting": "Xin chào, mình có thể hỗ trợ gì cho bạn?",
    "chat.placeholder": "Nhập tin nhắn của bạn...",
    "chat.error": "Đã có lỗi xảy ra. Vui lòng thử lại sau ít phút.",
  },
  de: {
    "page.title": "Pham Trong Nghia | Portfolio",
    "nav.homeAria": "Zum Profilbereich wechseln",
    "nav.about": "Über mich",
    "nav.skills": "Skills",
    "nav.projects": "Projekte",
    "nav.contact": "Kontakt",
    "language.aria": "Website-Sprache auswählen",
    "profile.label": "Portfolio",
    "profile.greeting": "Hallo, ich bin Nghia Pham",
    "profile.role":
      "IT-Administrator | Softwareentwickler | Webentwickler | IT-Security Assistant",
    "profile.lead":
      "Ich entwickle verlässliche digitale Erlebnisse mit Fokus auf klare Oberflächen, sichere Systeme und praktische Problemlösungen.",
    "profile.location": "Standort München",
    "profile.open": "Offen für neue Chancen",
    "profile.cv": "CV herunterladen",
    "profile.hire": "Kontakt aufnehmen",
    "about.label": "Mehr über mich",
    "about.title": "Über mich",
    "about.experience.title": "Erfahrung",
    "about.experience.body":
      "IT-Administrator (1+ Jahre) <br /> IT-Security Assistant (1+ Jahre) <br /> Software- und Webentwickler (2+ Jahre)",
    "about.education.title": "Ausbildung",
    "about.education.body": "B.Sc. Informations technologie",
    "skills.title": "Skills",
    "skills.languages": "Sprachen",
    "skills.web": "Web",
    "skills.database": "Datenbank",
    "skills.tools": "Tools",
    "projects.label": "Aktuelle Arbeiten",
    "projects.title": "Projekte",
    "projects.project1.title": "Turingmaschinen-Simulator",
    "projects.project1.body":
      "Ein visueller Simulator, um Zustände, Übergänge und Maschinenlogik klarer zu erkunden.",
    "projects.project2.title": "Cloud mit Raspberry Pi 5",
    "projects.project2.body":
      "Eine Private-Cloud-Lösung mit Fokus auf Self-Hosting, Storage und praktischer Systemadministration.",
    "projects.project3.title": "Android-Anwendung",
    "projects.project3.body":
      "Eine Kotlin-basierte Mobile-App mit klarem Nutzerfluss und stabiler Struktur.",
    "projects.github": "Github",
    "projects.demo": "Live-Demo",
    "contact.label": "Lass uns zusammenarbeiten",
    "contact.title": "Kontakt",
    "contact.sectionTitle": "Kontakt",
    "contact.address.title": "Adresse",
    "contact.address.body": "München, Deutschland",
    "contact.email.title": "E-Mail",
    "contact.phone.title": "Telefon",
    "contact.social.title": "Soziale Medien",
    "contact.messageTitle": "Nachricht senden",
    "contact.namePlaceholder": "Ihr Name",
    "contact.emailPlaceholder": "Ihre E-Mail",
    "contact.subjectPlaceholder": "Betreff",
    "contact.messagePlaceholder": "Nachricht",
    "contact.send": "Nachricht senden",
    "contact.success": "Ihre Nachricht wurde erfolgreich gesendet!",
    "contact.error": "Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut.",
    "footer.copy": "Copyright © 2025 Nghia Pham. Alle Rechte vorbehalten",
    "chat.title": "Chatbot",
    "chat.toggleAria": "Chatbot öffnen",
    "chat.greeting": "Hallo, wie kann ich Ihnen helfen?",
    "chat.placeholder": "Geben Sie Ihre Nachricht hier ein...",
    "chat.error": "Etwas ist schiefgelaufen. Bitte versuchen Sie es gleich erneut.",
  },
};

let currentLanguage = "en";

function getBrowserLanguage() {
  const browserLanguage = navigator.language?.slice(0, 2).toLowerCase();
  return SUPPORTED_LANGUAGES.includes(browserLanguage) ? browserLanguage : "en";
}

function getLanguageMeta(language = currentLanguage) {
  return LANGUAGE_META[language] || LANGUAGE_META.en;
}

function getTranslation(key, language = currentLanguage) {
  return (
    TRANSLATIONS[language]?.[key] ??
    TRANSLATIONS.en[key] ??
    key
  );
}

function setText(selectors, key) {
  selectors.forEach((selector) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.textContent = getTranslation(key);
    });
  });
}

function setHTML(selector, key) {
  const element = document.querySelector(selector);
  if (element) {
    element.innerHTML = getTranslation(key);
  }
}

function setPlaceholder(selector, key) {
  const element = document.querySelector(selector);
  if (element) {
    element.placeholder = getTranslation(key);
  }
}

function closeLanguageMenu(menu) {
  if (!menu) {
    return;
  }

  menu.classList.remove("is-open");
  const trigger = menu.querySelector("[data-language-trigger]");
  if (trigger) {
    trigger.setAttribute("aria-expanded", "false");
  }
}

function closeAllLanguageMenus() {
  document.querySelectorAll("[data-language-menu].is-open").forEach((menu) => {
    closeLanguageMenu(menu);
  });
}

function toggleLanguageMenu(menu) {
  if (!menu) {
    return;
  }

  const shouldOpen = !menu.classList.contains("is-open");
  closeAllLanguageMenus();

  if (!shouldOpen) {
    return;
  }

  menu.classList.add("is-open");
  const trigger = menu.querySelector("[data-language-trigger]");
  if (trigger) {
    trigger.setAttribute("aria-expanded", "true");
  }
}

function updateLanguageMenuUI(menu, language = currentLanguage) {
  const { label, flag } = getLanguageMeta(language);
  menu.dataset.language = language;

  const flagElement = menu.querySelector("[data-language-flag]");
  const labelElement = menu.querySelector("[data-language-label]");

  if (flagElement) {
    flagElement.textContent = flag;
  }

  if (labelElement) {
    labelElement.textContent = label;
  }

  menu.querySelectorAll("[data-language-option]").forEach((option) => {
    const isActive = option.dataset.languageOption === language;
    option.classList.toggle("is-active", isActive);
    option.setAttribute("aria-selected", String(isActive));
  });
}

function ensureLanguageMenus() {
  document.querySelectorAll("[data-language-menu]").forEach((menu) => {
    const panel = menu.querySelector("[data-language-panel]");
    if (!panel) {
      return;
    }

    panel.innerHTML = "";

    SUPPORTED_LANGUAGES.forEach((language) => {
      const { label, flag } = getLanguageMeta(language);
      const option = document.createElement("button");
      option.type = "button";
      option.className = "language-menu-option";
      option.setAttribute("role", "option");
      option.setAttribute("data-language-option", language);
      option.setAttribute("aria-selected", "false");
      option.innerHTML = `
        <span class="language-menu-option-flag" aria-hidden="true">${flag}</span>
        <span class="language-menu-option-label">${label}</span>
        <span class="language-menu-option-mark" aria-hidden="true">✓</span>
      `;
      panel.appendChild(option);
    });
  });
}

function applyStaticTranslations() {
  document.title = getTranslation("page.title");
  document.documentElement.lang = currentLanguage;
  document.querySelectorAll(".brand-mark").forEach((link) => {
    link.setAttribute("aria-label", getTranslation("nav.homeAria"));
  });
  document.querySelectorAll("[data-language-trigger]").forEach((trigger) => {
    trigger.setAttribute("aria-label", getTranslation("language.aria"));
    trigger.title = getTranslation("language.aria");
  });
  const chatToggleButton = document.getElementById("popup_toggler");
  if (chatToggleButton) {
    chatToggleButton.setAttribute("aria-label", getTranslation("chat.toggleAria"));
    chatToggleButton.title = getTranslation("chat.toggleAria");
  }

  setText(
    [
      "#desktop-nav .nav-links a[href='#about']",
      "#hamburger-nav .menu-links a[href='#about']",
      "footer .nav-links a[href='#about']",
    ],
    "nav.about"
  );
  setText(
    [
      "#desktop-nav .nav-links a[href='#skills']",
      "#hamburger-nav .menu-links a[href='#skills']",
      "footer .nav-links a[href='#skills']",
    ],
    "nav.skills"
  );
  setText(
    [
      "#desktop-nav .nav-links a[href='#projects']",
      "#hamburger-nav .menu-links a[href='#projects']",
      "footer .nav-links a[href='#projects']",
    ],
    "nav.projects"
  );
  setText(
    [
      "#desktop-nav .nav-links a[href='#contact']",
      "#hamburger-nav .menu-links a[href='#contact']",
      "footer .nav-links a[href='#contact']",
    ],
    "nav.contact"
  );

  setText(["#profile .section__text__p1"], "profile.label");
  setText(["#profile .profile__text__p1"], "profile.greeting");
  setText(["#profile .profile__text__p2"], "profile.role");
  setText(["#profile .profile__text__lead"], "profile.lead");
  setText(["#cv_download_btn"], "profile.cv");
  setText(["#hire_me_btn"], "profile.hire");

  setText(["#about .section__text__p1"], "about.label");
  setText(["#about .title"], "about.title");
  const aboutCards = document.querySelectorAll("#about .details-container");
  if (aboutCards[0]) {
    aboutCards[0].querySelector("h3").textContent = getTranslation("about.experience.title");
    aboutCards[0].querySelector("p").innerHTML = getTranslation("about.experience.body");
  }
  if (aboutCards[1]) {
    aboutCards[1].querySelector("h3").textContent = getTranslation("about.education.title");
    aboutCards[1].querySelector("p").innerHTML = getTranslation("about.education.body");
  }

  setText(["#skills .skills-title"], "skills.title");
  const skillLabels = document.querySelectorAll("#skills .skills-label");
  const skillKeys = [
    "skills.languages",
    "skills.web",
    "skills.database",
    "skills.tools",
  ];
  skillLabels.forEach((label, index) => {
    label.textContent = getTranslation(skillKeys[index]);
  });

  setText(["#projects .section__text__p1"], "projects.label");
  setText(["#projects .title"], "projects.title");
  const projectCards = document.querySelectorAll("#projects .color-container");
  const projectKeys = [
    ["projects.project1.title", "projects.project1.body"],
    ["projects.project2.title", "projects.project2.body"],
    ["projects.project3.title", "projects.project3.body"],
  ];
  projectCards.forEach((card, index) => {
    const [titleKey, bodyKey] = projectKeys[index];
    const title = card.querySelector(".project-title");
    const body = card.querySelector(".project-copy");
    if (title) title.textContent = getTranslation(titleKey);
    if (body) body.textContent = getTranslation(bodyKey);
    const [githubButton, demoButton] = card.querySelectorAll(".project-btn");
    if (githubButton) githubButton.textContent = getTranslation("projects.github");
    if (demoButton) demoButton.textContent = getTranslation("projects.demo");
  });

  setText(["#contact > .section__text__p1"], "contact.label");
  setText(["#contact > .title"], "contact.title");
  const contactHeadings = document.querySelectorAll("#contact .container > h2");
  if (contactHeadings[0]) {
    contactHeadings[0].textContent = getTranslation("contact.sectionTitle");
  }
  if (contactHeadings[1]) {
    contactHeadings[1].textContent = getTranslation("contact.messageTitle");
  }
  const contactCards = document.querySelectorAll("#contact .contact-card");
  if (contactCards[0]) {
    contactCards[0].querySelector("h3").textContent = getTranslation("contact.address.title");
    contactCards[0].querySelector("p").textContent = getTranslation("contact.address.body");
  }
  if (contactCards[1]) {
    contactCards[1].querySelector("h3").textContent = getTranslation("contact.email.title");
  }
  if (contactCards[2]) {
    contactCards[2].querySelector("h3").textContent = getTranslation("contact.phone.title");
  }
  if (contactCards[3]) {
    contactCards[3].querySelector("h3").textContent = getTranslation("contact.social.title");
  }
  setPlaceholder("#sender_name", "contact.namePlaceholder");
  setPlaceholder("#sender_email", "contact.emailPlaceholder");
  setPlaceholder("#sender_title", "contact.subjectPlaceholder");
  setPlaceholder("#sender_message", "contact.messagePlaceholder");
  setText(["#contact form button[type='submit']"], "contact.send");

  setText(["footer > p"], "footer.copy");

  setText([".chat-window .chat_header p"], "chat.title");
  setText([".chatbot-greeting"], "chat.greeting");
  setPlaceholder(".chat-window .input_typing", "chat.placeholder");
}

function syncLanguageMenus(language) {
  document.querySelectorAll("[data-language-menu]").forEach((menu) => {
    updateLanguageMenuUI(menu, language);
  });
}

function applyLanguage(language) {
  currentLanguage = SUPPORTED_LANGUAGES.includes(language) ? language : "en";
  localStorage.setItem(PORTFOLIO_LANGUAGE_KEY, currentLanguage);
  applyStaticTranslations();
  syncLanguageMenus(currentLanguage);
  closeAllLanguageMenus();
  document.dispatchEvent(
    new CustomEvent("portfolio-language-change", {
      detail: { language: currentLanguage },
    })
  );
}

function attachLanguageEvents() {
  document.querySelectorAll("[data-language-menu]").forEach((menu) => {
    if (menu.dataset.languageMenuBound === "true") {
      return;
    }

    const trigger = menu.querySelector("[data-language-trigger]");
    const panel = menu.querySelector("[data-language-panel]");

    trigger?.addEventListener("click", (event) => {
      event.stopPropagation();
      toggleLanguageMenu(menu);
    });

    panel?.addEventListener("click", (event) => {
      const option = event.target.closest("[data-language-option]");
      if (!option) {
        return;
      }

      applyLanguage(option.dataset.languageOption);
    });

    menu.dataset.languageMenuBound = "true";
  });

  if (document.body.dataset.languageMenuGlobalBound === "true") {
    return;
  }

  document.addEventListener("click", (event) => {
    if (!event.target.closest("[data-language-menu]")) {
      closeAllLanguageMenus();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeAllLanguageMenus();
    }
  });

  document.body.dataset.languageMenuGlobalBound = "true";
}

window.getPortfolioLanguage = function () {
  return currentLanguage;
};

window.getPortfolioTranslation = function (key) {
  return getTranslation(key);
};

document.addEventListener("DOMContentLoaded", () => {
  ensureLanguageMenus();
  attachLanguageEvents();

  const savedLanguage = localStorage.getItem(PORTFOLIO_LANGUAGE_KEY);
  const initialLanguage = SUPPORTED_LANGUAGES.includes(savedLanguage)
    ? savedLanguage
    : getBrowserLanguage();

  applyLanguage(initialLanguage);
});
