document.addEventListener("DOMContentLoaded", () => {
  form.addEventListener("submit", add - ToDo);


});





////// Category item active state
// const items = document.querySelectorAll(".category-item");

// items.forEach(item => {
//   item.addEventListener("click", () => {
//     items.forEach(i => i.classList.remove("active"));
//     item.classList.add("active");
//   });
// });

// const todoCompleted = document.querySelectorAll(".card-checkbox");

// todoCompleted.forEach(checkbox => {
//   checkbox.addEventListener("change", (e) => {

//     const todocard = e.target.closest(".card");
//     const todocardcontent = todocard.querySelector(".card-content");

//     if (checkbox.checked) {
//       todocardcontent.style.backgroundColor = "var(--secondary-a30)";
//     } else {
//       todocardcontent.style.backgroundColor = "var(--primary-a30)";
//     }
//   });
// });

const checkboxes = document.querySelectorAll(".card-checkbox");

checkboxes.forEach(checkbox => {
  checkbox.addEventListener("change", (e) => {

    const todoCompleted = e.currentTarget;
    const label = todoCompleted.closest(".checkbox-wrapper");
    const content = label.parentElement;

    if (todoCompleted.checked) {
      content.style.backgroundColor = "var(--secondary-a30)";
    } else {
      content.style.backgroundColor = "var(--primary-a30)";
    }

  });
});

