export function drawer() {
  // Mobil cihazlar için çekmece
  const menuToggle = document.querySelector(".menu-toggle");
  const drawerMenu = document.querySelector(".drawer-menu");

  menuToggle.addEventListener("click", () => {
    drawerMenu.classList.toggle("open"); // Sınıf ekler veya kaldırır
  });

  // Menüyü kapatmak için bir dış alan tıklama olayı ekleyebilirsiniz
  document.addEventListener("click", (event) => {
    if (
      !drawerMenu.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      drawerMenu.classList.remove("open");
    }
  });
}
