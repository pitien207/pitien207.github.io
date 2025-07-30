// Định nghĩa hàm khởi tạo trong global scope
window.googleTranslateElementInit = function () {
  new google.translate.TranslateElement(
    {
      pageLanguage: "en", // Ngôn ngữ gốc của trang
      includedLanguages: "vi,en,ja,fr,de",
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
      autoDisplay: false,
    },
    "google_translate_element"
  );
};

// Code xử lý chọn ngôn ngữ (nếu bạn chưa thêm)
function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function changeLanguage(lang) {
  if (!lang) {
    setCookie("googtrans", "", -1);
    location.reload();
    return;
  }

  const cookieVal = `/en/${lang}`;
  setCookie("googtrans", cookieVal, 1);
  location.reload();
}

document.addEventListener("DOMContentLoaded", function () {
  const languageSwitcher = document.getElementById("languageSwitcher");
  if (languageSwitcher) {
    languageSwitcher.addEventListener("change", function () {
      changeLanguage(this.value);
    });
  }
});
