// Bölümleri yükle
function loadComponents() {
  // Header Yükle
  fetch("components/header/header.html")
    .then((response) => response.text())
    .then((data) => (document.getElementById("header").innerHTML = data));

  // Slider Yükle
  fetch("components/slider/slider.html")
    .then((response) => response.text())
    .then((data) => (document.getElementById("slider").innerHTML = data));

  // Speakers Yükle
  fetch("components/speakers/speakers.html")
    .then((response) => response.text())
    .then((data) => (document.getElementById("speakers").innerHTML = data));

  // Event-Slider Yükle
  fetch("components/event-slider/events-slider.html")
    .then((response) => response.text())
    .then(
      (data) => (document.getElementById("events-slider").innerHTML = data)
    );
}

// Sayfa yüklendiğinde çalıştır
document.addEventListener("DOMContentLoaded", loadComponents);
