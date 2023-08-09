import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./firebase";
// User add his information
// name, email, rank, imageUrl
// how to get and display them?
// how to always track and display the user list
const userListContainer = document.querySelector(".user__list");

const unsub = onSnapshot(collection(db, "users"), (snapshot) => {
  userListContainer.innerHTML = "";

  snapshot.forEach((doc) => {
    console.log(doc.data(), doc.id);
    const user = doc.data();
    const innerHTML = `
      <div class="user__user" data-id=${doc.id}>
        <img src=${user.imageUrl} alt="profile image" class="user__image" />
        <div class="user__info">
          <h3 class="user__name">${user.name}</h3>
          <p class="user__email">${user.email}</p>
        </div>
        <div class="user__menu">
          <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
        <div class="user__menu-toggle">
              <p>EDIT</p>
              <p>DELETE</p>
        </div>
      </div>
    `;

    userListContainer.insertAdjacentHTML("beforeend", innerHTML);
  });
});
