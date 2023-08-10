const userListContainer = document.querySelector(".user__list");

userListContainer.addEventListener("click", (e) => {
  const menuToggle = e.target.closest(".user__menu-icon");

  if (menuToggle) {
    const menuItems = menuToggle.nextElementSibling;
    menuItems.classList.toggle("hidden");
  }
});