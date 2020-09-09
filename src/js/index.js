import "../scss/main.scss";

const textArea = document.querySelector(".text-area--js");

const save = document.querySelector(".save--js");

const load = document.querySelector(".load--js");

const entry = localStorage.getItem("entry");

let result = "";

if (entry) {
  result = entry;
}

textArea.value = result;

save.addEventListener("click", () => {
  localStorage.setItem("entry", textArea.value);
});

load.addEventListener("click", () => {
  textArea.value = localStorage.getItem("entry");
});
