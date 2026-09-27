const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector("#menu");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    menu.hidden = open;
    toggle.textContent = open ? "Menu" : "Close";
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      toggle.setAttribute("aria-expanded", "false");
      menu.hidden = true;
      toggle.textContent = "Menu";
    });
  });
}
