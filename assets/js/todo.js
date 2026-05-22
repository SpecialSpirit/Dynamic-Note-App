const form = document.querySelector('.model form');


const items = document.querySelectorAll(".category-item");

items.forEach(item => {
  item.addEventListener("click", () => {
    items.forEach(i => i.classList.remove("active"));
    item.classList.add("active");
  });
});