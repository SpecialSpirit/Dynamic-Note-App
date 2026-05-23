document.addEventListener("DOMContentLoaded", () => {
  form.addEventListener("submit", add-ToDo);
  

});





////// Category item active state
const items = document.querySelectorAll(".category-item");

items.forEach(item => {
  item.addEventListener("click", () => {
    items.forEach(i => i.classList.remove("active"));
    item.classList.add("active");
  });
});

// const checkboxchecked = document.querySelectorAll(".card-checkbox");
// const cardText = document.querySelectorAll(".card-text");

// checkboxchecked.forEach(checkbox => {
//   checkbox.addEventListener("change", () => {
//     if (checkbox.checked) {
//         cardText.forEach(text => {
//             text.style.textDecoration = "line-through";
//         });
//     } else {
//         cardText.forEach(text => {
//             text.style.textDecoration = "none";
//         });
//     }
//   });
// });
