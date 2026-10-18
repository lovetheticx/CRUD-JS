import { users } from "./data.js";

const searchFormEl = document.querySelector(".search-wrapper");

const userWrapper = document.querySelector(".user-wrapper");

window.deleteUser = function (id) {
  let index = users.findIndex((usr) => usr.id == id);
  users.splice(index, 1);

  readData(users);
};

function readData(arr) {
  userWrapper.innerHTML = "";
  arr.forEach((user) => {
    userWrapper.innerHTML += `
    <div class="user">
        <h2>${user.name}</h2>
        <h2>${user.lastName}</h2>
        <p>Age: ${user.age}</p>
        <p>Profession: ${user.job}</p>
        <p>Email: ${user.email}</p>
        <p>Password: ${user.password}</p>
        <button onclick="deleteUser(${user.id})" class="delete-btn">Delete</button>
    </div>
`;
  });
}
readData(users);

searchFormEl.addEventListener("submit", (e) => {
  e.preventDefault();
  let formData = new FormData(searchFormEl);
  let inputValue = formData.get("search-text");
  let filterUserNames = users.filter((user) => {
    if (user.name.toLowerCase().includes(inputValue.toLowerCase())) {
      return user;
    }
  });
  readData(filterUserNames);
});
