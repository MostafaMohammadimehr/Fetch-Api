const mybtn = document.getElementById("gettext");
let FEtch = () => {
  fetch("/sample.txt")
    .then((res) => res.text())
    .then((data) => console.log(data));
};
mybtn.addEventListener("click", FEtch);
