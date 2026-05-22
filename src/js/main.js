import gsap from "gsap";
// Onglets programme
document.querySelectorAll(".tab-principal").forEach((tab) => {
  tab.addEventListener("click", () => {
    document
      .querySelectorAll(".tab-principal")
      .forEach((t) => t.classList.remove("active"));
    document
      .querySelectorAll(".tab-content")
      .forEach((c) => c.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");

    if (tab.dataset.tab === "seances") {
      document
        .querySelectorAll(".tab-jour")
        .forEach((t) => t.classList.remove("active"));
      document
        .querySelectorAll(".tab-jour-content")
        .forEach((c) => c.classList.remove("active"));
      document.querySelector(".tab-jour").classList.add("active");
      document
        .getElementById(document.querySelector(".tab-jour").dataset.jour)
        .classList.add("active");
    }
  });
});

// Dropdown header
document.querySelectorAll(".dropdown").forEach((dropdown) => {
  dropdown.querySelector(".nav-btn").addEventListener("click", () => {
    dropdown.classList.toggle("active");
    dropdown.querySelector(".nav-btn").classList.toggle("open");
  });
});

// Dropdown billeterie
document.querySelectorAll(".b-dropdown-box").forEach((box) => {
  box.querySelector(".b-dropdown-button").addEventListener("click", () => {
    box.classList.toggle("active");
  });
});

// Dropdown FAQ footer
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".ffaq-dropdown-box").forEach((box) => {
    box.querySelector(".ffaq-dropdown-button").addEventListener("click", () => {
      box.classList.toggle("active");
    });
  });
});

// // Dropdown Slider homepage
// const box = document.querySelector(".h-destination-box");

// document.querySelector(".slider-prev").addEventListener("click", () => {
//   box.scrollBy({ left: -430, behavior: "smooth" });
// });

// document.querySelector(".slider-next").addEventListener("click", () => {
//   box.scrollBy({ left: 430, behavior: "smooth" });
// });

// // Dropdown Slider destinations
// const box = document.querySelector(".c-movie-box");

// document.querySelector(".slider-prev").addEventListener("click", () => {
//   box.scrollBy({ left: -430, behavior: "smooth" });
// });

// document.querySelector(".slider-next").addEventListener("click", () => {
//   box.scrollBy({ left: 430, behavior: "smooth" });
// });

const homeSlider = document.querySelector(".h-destination-box");
document.querySelector(".slider-prev")?.addEventListener("click", () => {
  homeSlider?.scrollBy({ left: -430, behavior: "smooth" });
});
document.querySelector(".slider-next")?.addEventListener("click", () => {
  homeSlider?.scrollBy({ left: 430, behavior: "smooth" });
});

// Slider programme
const programmeSlider = document.querySelector(".c-movie-box");
document.querySelector(".slider-prev")?.addEventListener("click", () => {
  programmeSlider?.scrollBy({ left: -430, behavior: "smooth" });
});
document.querySelector(".slider-next")?.addEventListener("click", () => {
  programmeSlider?.scrollBy({ left: 430, behavior: "smooth" });
});
