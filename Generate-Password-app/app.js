const passPlace = document.getElementById("password-place");
const copyButton = document.getElementById("copy-button");
const generateButton = document.getElementById("generate-button");
const tooltip = document.querySelector(".tooltip");

const length = 12;

function generatePassword() {
  let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ&{([-|_\\^@)]+#!?%$}123456780";

  let password = "";

  for (let i = 0; i <= length; i++) {
    password += characters[Math.floor(Math.random() * characters.length)];
  }

  return password;
}

generateButton.onclick = () => {
  passPlace.value = generatePassword();
}

copyButton.onclick = () => {
  try {
    copyPassword();
  } catch (e) {
    console.log("Unable to copy to clipboard")
  }
}

function copyPassword() {
  passPlace.select();
  navigator.clipboard.writeText(passPlace.value);
  tooltip.classList.add("active");
  setTimeout(() => {
    tooltip.classList.remove("active");
  }, 400);
}