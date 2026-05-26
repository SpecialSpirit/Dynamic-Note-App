const modal = document.querySelector('.model');
const addNoteBtn = document.getElementById('card-add-button');
const modalClose = document.querySelector('.model-cancel');
const modalSave = document.querySelector('.model-save');
const modalTextarea = document.querySelector('.model-textarea');
const notesContainer = document.getElementById('notes-container');
addNoteBtn.addEventListener('click', () => {
    modal.style.visibility = 'visible';
    modal.style.opacity = '1';
});
modalClose.addEventListener('click', () => {
    modal.style.visibility = 'hidden';
    modal.style.opacity = '0';
});     
modalSave.addEventListener('click', () => {
    const noteText = modalTextarea.value.trim();   
    if (noteText) {
        const noteElement = document.createElement('div');
        noteElement.classList.add('note');  

        noteElement.textContent = noteText;
        notesContainer.appendChild(noteElement);    
        modal.style.visibility = 'hidden';
        modal.style.opacity = '0';
    }

});

// addNoteBtn.addEventListener('click', () => {
//     if (modal.style.visibility === 'visible') {
//         notesContainer.style.animation = 'fadeUp 300ms ease';
//     }
//     else {
//         notesContainer.style.animation = 'none';
//     }

// });

addNoteBtn.addEventListener("click", () => {
    modal.classList.add("active");
});

modalClose.addEventListener("click", () => {
    modal.classList.remove("active");
});


