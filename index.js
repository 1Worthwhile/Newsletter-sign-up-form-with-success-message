"use strict";
let button = document.querySelector(".subscribe_btn button");
let form = document.querySelector(".form");
let success_msg = document.querySelector(".thanks");
let email_input = document.querySelector(".input_box input");
let input_con = document.querySelector(".input_box ");
let dismiss_msg = document.querySelector(".thanks button");
button.addEventListener("click", () => {
  let value = email_input.value;
  if (value.includes("@") === false) {
    input_con.classList.add("err");
  } else {
    input_con.classList.remove("err");
    success_msg.classList.add("active");
    form.classList.add("remove");
  }
});

dismiss_msg.addEventListener("click", () => {
  form.classList.remove("remove");
  success_msg.classList.remove("active");
});
