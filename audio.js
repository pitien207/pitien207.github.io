const sound = document.getElementById("hoverSound");
const btnCv = document.getElementById("cv_download_btn");
const btnHire = document.getElementById("hire_me_btn");

[btnCv, btnHire].forEach((button) => {
  if (button) {
    // kiểm tra button tồn tại
    button.addEventListener("mouseenter", () => {
      sound.currentTime = 0;
      sound.play();
    });
  }
});
