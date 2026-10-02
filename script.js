document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const mainNav = document.getElementById("main-nav");

  const toggleMenu = () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    const expanded = !isExpanded;

    menuToggle.setAttribute("aria-expanded", expanded);
    menuToggle.setAttribute(
      "aria-label",
      expanded ? "Закрити меню" : "Відкрити меню",
    );
    menuToggle.classList.toggle("is-open", expanded);
    menuToggle.querySelector(".menu-toggle-label").textContent = expanded
      ? "Закрити"
      : "Меню";
    mainNav.classList.toggle("is-open", expanded);
  };

  menuToggle.addEventListener("click", toggleMenu);

  const navLinks = mainNav.querySelectorAll("a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (
        window.innerWidth < 1024 &&
        menuToggle.getAttribute("aria-expanded") === "true"
      ) {
        toggleMenu();
      }
    });
  });
});
