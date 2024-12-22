import { updateCountdown } from "./countdown.js";
import { bioModal } from "./bioModal.js";
import { drawer } from "./drawer.js";
import { eventSlider } from "./event-slider.js";
import { activeButton } from "./activeButton.js";

document.addEventListener("DOMContentLoaded", async () => {
  // Dinamik HTML parçalarını yükle
  await loadComponent("components/header/header.html", "header");
  await loadComponent("components/slider/slider.html", "slider");
  await loadComponent("components/speakers/speakers.html", "speakers");
  await loadComponent("components/event-slider/events-slider.html", "events-slider");

  // Mobil cihazlar için çekmece yönetimi
  drawer();

  // Geri sayım yönetimi
  setInterval(updateCountdown, 1000);
  updateCountdown();

  // Buton aktiflik yönetimi
  activeButton();

  // Modal yönetimi
  bioModal();

  // Slider kaydırma yönetimi
  eventSlider();
});

// HTML Parçalarını Yükleme Fonksiyonu
async function loadComponent(url, targetId) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Komponent yüklenemedi");
    }
    const html = await response.text();
    document.getElementById(targetId).innerHTML = html;
  } catch (error) {
    console.error("Yükleme hatası: ", error);
  }
}
