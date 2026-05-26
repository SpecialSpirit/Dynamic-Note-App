document.addEventListener("DOMContentLoaded", () => {
  form.addEventListener("submit", add - ToDo);


});





////// Category item active state
const items = document.querySelectorAll(".category-item");

items.forEach(item => {
  item.addEventListener("click", () => {
    items.forEach(i => i.classList.remove("active"));
    item.classList.add("active");
  });
});

// To-Do item completed state
const checkboxes = document.querySelectorAll(".card-checkbox");

checkboxes.forEach(checkbox => {
  checkbox.addEventListener("change", (e) => {

    const todoCompleted = e.currentTarget;
    const checkboxBG = todoCompleted.closest(".card-content");

    if (todoCompleted.checked) {
      checkboxBG.style.backgroundColor = "var(--secondary-a30)";
    } else {
      checkboxBG.style.backgroundColor = "var(--primary-a30)";
    }

  });
});
