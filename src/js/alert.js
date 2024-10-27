let alert = document.querySelector(".alert");
let btn_cart = document.querySelector(".btn-cart");

btn_cart.addEventListener("click", () => {
  document.querySelector(".alert").style.right = 0;

  setTimeout(() => {
    document.querySelector(".alert").style.right = "-100%";
  }, 3000);
});
