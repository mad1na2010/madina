// Scroll paytida bo‘limlar yumshoq chiqish effekti
window.addEventListener("scroll", () => {
  document.querySelectorAll("section").forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      sec.style.opacity = "1";
      sec.style.transform = "translateY(0)";
    } else {
      sec.style.opacity = "0";
      sec.style.transform = "translateY(40px)";
    }
  });
});

// Tugmani bosganda chiqadigan xabar
function sendMessage() {
  alert("Rahmat! Siz bilan tez orada bog‘lanaman 😊");
}
