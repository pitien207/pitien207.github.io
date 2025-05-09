window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  const letters = preloader.querySelectorAll(".preloader-text span");

  // Gán giá trị index cho từng span
  letters.forEach((letter, index) => {
    letter.style.setProperty("--index", index);
  });

  setTimeout(() => {
    // Đơn giản chỉ ẩn preloader sau 3.5 giây
    preloader.classList.add("hide");
  }, 3000);
});
