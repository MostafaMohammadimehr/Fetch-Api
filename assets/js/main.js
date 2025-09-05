document.getElementById("mybtn").addEventListener("click", () => {
  fetch("/assets/json/users.json")
    .then((res) => res.json())
    .then((json) => console.log(json));
});
