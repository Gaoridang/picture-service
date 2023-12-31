const addForm = document.querySelector(".form-add");
const editForm = document.querySelector(".form-edit");
const addUserBtn = document.querySelector(".header__btn-add-user");
const closeInputBtns = document.querySelectorAll(".close-btn");
const ImageBox = document.querySelector(".form__image-box");
const imageInput = document.querySelector("form__input-image");
const userListContainer = document.querySelector(".user__list");

addUserBtn.addEventListener("click", () => {
  addForm.classList.remove("hidden");
});

closeInputBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    addForm.classList.add("hidden");
    addForm.reset();
    editForm.classList.add("hidden");
    editForm.reset();
  });
});

userListContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("user__image")) {
    e.target.closest(".user__user").classList.toggle("detail");
  }
});
