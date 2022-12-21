document.addEventListener('DOMContentLoaded', function (event) {
    let note = localStorage.getItem('note');

    if (note != null) {
        allNotes.innerHTML = note;
    }

})

const author = document.getElementById('author');

function saveNote() {
    let allNotes = document.querySelector('#allNotes');
    let note = document.getElementById('note').value;
    let date = new Date();
    let newDate = date.toLocaleString([], {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });

    let newNote = `Заметка от ` + newDate + `:<br> ` + note + `<br><br>`;
    allNotes.innerHTML += newNote;
    document.getElementById('note').value = '';

    if (localStorage.getItem('note') == null) {
        localStorage.setItem('note', newNote);
    }
}

function clearStorage() {
    localStorage.clear();
    allNotes.innerHTML = '';
}