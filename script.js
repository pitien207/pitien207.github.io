function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.getElementById("logoImage").addEventListener("click", function () {
  this.classList.add("clicked"); // Add the click effect
  setTimeout(() => {
    location.reload(); // Refresh the page after a short delay
  }, 100); // Wait for the effect to complete before refreshing
});
