const btnPlusTag = document.getElementsByClassName("fa-square-plus");
console.log(btnPlusTag);
for (let i = 0; i < btnPlusTag.length; i++) {
  btnPlusTag[i].addEventListener("click", function (event) {
    event.target.previousElementSibling.innerText++;
    calculateTotal();
  });
}
const btnMinusTag = document.getElementsByClassName("fa-square-minus");
console.log(btnMinusTag);
for (let i = 0; i < btnMinusTag.length; i++) {
  btnMinusTag[i].addEventListener("click", function (event) {
    if (event.target.nextElementSibling.innerText > 1) {
      event.target.nextElementSibling.innerText--;
      calculateTotal();
    }
  });
}
var btnDeleteTag = document.getElementsByClassName("fa-trash");
console.log(btnDeleteTag);
for (let i = 0; i < btnDeleteTag.length; i++) {
  btnDeleteTag[i].addEventListener("click", function (event) {
    event.target.closest(".single-item").remove();
    calculateTotal();
  });
}
var btnliketag = document.getElementsByClassName("fa-thumbs-up");
console.log(btnliketag);
for (let i = 0; i < btnliketag.length; i++) {
  btnliketag[i].addEventListener("click", function (event) {
    event.target.classList.toggle("like");
  });
}
function calculateTotal() {
  var sum = 0;
  var products = document.getElementsByClassName("single-item");
  console.log(products);
  for (let i = 0; i < products.length; i++) {
    var prix = products[i].querySelector(".price").innerText;
    var qte = products[i].querySelector(".qte").innerText;
    sum += prix * qte;
  }
  console.log(sum);
  document.getElementById("total").innerText = sum;
}
calculateTotal();
