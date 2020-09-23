import "../scss/main.scss";

const textArea = document.querySelector(".text-area--js");

const save = document.querySelector(".save--js");

const load = document.querySelector(".load--js");

const info = localStorage.getItem("entry");

save.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.setItem("entry", textArea.value);
  if (info) {
    document.querySelector(".info--js").innerHTML = "ℹ";
  } else {
    document.querySelector(".info--js").innerHTML = "";
  }
});

load.addEventListener("click", (e) => {
  e.preventDefault();
  textArea.value = localStorage.getItem("entry");
});
