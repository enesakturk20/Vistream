export function bioModal() {
    const bioButtons = document.querySelectorAll(".see-bio-btn");
    const modal = document.getElementById("bioModal");
    const modalClose = document.querySelector(".close-btn");
    const modalImage = document.getElementById("modalImage");
    const modalName = document.getElementById("modalName");
    const modalAffiliation = document.getElementById("modalAffiliation");
    const modalBio = document.getElementById("modalBio");
  
    if (
      modal &&
      modalClose &&
      modalImage &&
      modalName &&
      modalAffiliation &&
      modalBio
    ) {
      if (bioButtons.length > 0) {
        bioButtons.forEach((button) => {
          button.addEventListener("click", () => {
            const name = button.dataset.name;
            const bio = button.dataset.bio;
            const affiliation = button.dataset.affiliation;
            const image = button.dataset.image;
  
            modalName.textContent = name;
            modalAffiliation.textContent = affiliation;
            modalBio.textContent = bio;
            modalImage.src = image;
  
            modal.style.display = "flex";
          });
        });
      }
  
      // Modal Kapatma
      modalClose.addEventListener("click", () => {
        modal.style.display = "none";
      });
  
      window.addEventListener("click", (event) => {
        if (event.target === modal) {
          modal.style.display = "none";
        }
      });
    } else {
      console.warn("Modal elemanları bulunamadı!");
    }
  }
  