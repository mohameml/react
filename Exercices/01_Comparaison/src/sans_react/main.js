let nb1 = document.getElementById("nb1");
let nb2 = document.getElementById("nb2");
let btnCalcul = document.getElementById("calc");
let btnSup = document.getElementById("sup");
let res = document.querySelector(".res");

btnCalcul.addEventListener("click", function () {
  let a = parseInt(nb1.value);
  let b = parseInt(nb2.value);
  res.textContent = `resultat :${a + b}`;
});

btnSup.addEventListener("click", function () {
  nb1.value = "";
  nb2.value = "";
  res.textContent = "resultat :0";
});

let count = 1;

document.querySelector(".btn").addEventListener("click", function () {
  count++;
  document.querySelector(".count h2").textContent = `resultat : ${count}`;
});
