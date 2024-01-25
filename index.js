const first_name = document.getElementById("first-name");
const last_name = document.getElementById("last-name");
const email_addres = document.getElementById("email-addres");
const password = document.getElementById("password");
const button = document.getElementById("button");
const main_div = document.querySelector(".main-div");
const congratulation = document.querySelector(".congratulation");
button.addEventListener("click", () => {
  if (
    first_name.value.length === 0 &&
    last_name.value.length === 0 &&
    email_addres.value.length === 0 &&
    password.value.length === 0
  ) {
    first_name.style.borderColor = "red";
    last_name.style.borderColor = "red";
    email_addres.style.borderColor = "red";
    password.style.borderColor = "red";
  } else if (
    first_name.value.length === 0 &&
    last_name.value.length !== 0 &&
    email_addres.value.length !== 0 &&
    password.value.length !== 0
  ) {
    first_name.style.borderColor = "red";
  } else if (
    first_name.value.length !== 0 &&
    last_name.value.length === 0 &&
    email_addres.value.length !== 0 &&
    password.value.length !== 0
  ) {
    last_name.style.borderColor = "red";
  } else if (
    first_name.value.length !== 0 &&
    last_name.value.length !== 0 &&
    email_addres.value.length !== 0 &&
    password.value.length !== 0
  ) {
    main_div.style.display = "none";
    congratulation.style.display = "block";
  }
});
