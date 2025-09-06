document.getElementById("mybtn").addEventListener("click", () => {
  fetch("/assets/json/users.json")
    .then((res) => res.json())
    .then((json) => {
      let output = "";
      json.forEach(function (user) {
        output += `<ul>
        <li> ${user.id} </li>
        <li> ${user.name} </li>
        <li> ${user.email} </li>
        </ul>`;
      });
      document.getElementById("output").innerHTML = output;
    });
});
