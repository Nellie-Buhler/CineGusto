// Onglets principaux
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

// Onglets jours
document.querySelectorAll(".tab-jour").forEach((tab) => {
  tab.addEventListener("click", () => {
    document
      .querySelectorAll(".tab-jour")
      .forEach((t) => t.classList.remove("active"));
    document
      .querySelectorAll(".tab-jour-content")
      .forEach((c) => c.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(tab.dataset.jour).classList.add("active");
  });
});
