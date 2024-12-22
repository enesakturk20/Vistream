export function activeButton() {
  // Butonları Seç ve Aktiflik Yönetimi
  const buttons = document.querySelectorAll(".event-button");
  if (buttons.length === 0) {
    console.warn("Event butonları bulunamadı!");
  } else {
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        buttons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");
      });
    });
  }
}
