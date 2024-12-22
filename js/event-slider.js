export function eventSlider() {
  // Slider Scroll Eventleri
  const leftScrollBtn = document.getElementById("leftScroll");
  const rightScrollBtn = document.getElementById("rightScroll");

  if (leftScrollBtn && rightScrollBtn) {
    leftScrollBtn.addEventListener("click", leftScroll);
    rightScrollBtn.addEventListener("click", rightScroll);
  } else {
    console.warn("Slider scroll butonları bulunamadı!");
  }
}

// Sola kaydırma fonksiyonu
function leftScroll() {
  const slider = document.querySelector(".slider");
  if (slider) {
    slider.scrollBy({
      left: -300, // Piksel cinsinden sola kaydır
      behavior: "smooth", // Kaydırma animasyonu
    });
  }
}

// Sağa kaydırma fonksiyonu
function rightScroll() {
  const slider = document.querySelector(".slider");
  if (slider) {
    slider.scrollBy({
      left: 300, // Piksel cinsinden sağa kaydır
      behavior: "smooth", // Kaydırma animasyonu
    });
  }
}
