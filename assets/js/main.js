const mybtn = document.getElementById("gettext");

mybtn.addEventListener("click", () => {
  fetch("/sample.txt")
    .then((res) => res.text())
    .then((data) => console.log(data));
});
