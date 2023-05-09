const menu = document.querySelector("#menu");
const iconMenu = document.querySelector(".icon-menu");
const iconClose = document.querySelector(".icon-close");
const menuActions = document.querySelectorAll(".main-action");

function closeMenu() {
    menu.classList.remove("active");
}

iconMenu.addEventListener("click", () => {
    menu.classList.add("active");
})

iconClose.addEventListener("click", closeMenu);

menuActions.forEach(function(menuAction) {
    menuAction.addEventListener("click", function() {
      closeMenu();
    });
});
