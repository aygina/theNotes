document.addEventListener('DOMContentLoaded', function (event) {
    let notes = localStorage.getItem('notes');

    if (notes != null) {
        let clearNotes = notes.replace('"', '')
                                .replace('[', '')
                                .replace(']', '')
                                .replace('","', '\n')
                                .replace('\n', ' ')
                                .replace('\n', '')
                                .replace('"', '')
                                .replace(',"', '\n');
        allNotes.innerHTML = clearNotes;
    }
})

arrNote = [];
let saved = document.getElementById('cool');

let newNotes = document.getElementById("note");
newNotes.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        sendNote();
    }
});

function sendNote() {
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

    let newNote = (`Заметка от ` + newDate + `: ` + note + `<br>`);
    arrNote.push(newNote);

    allNotes.innerHTML = arrNote.join('');
    document.getElementById('note').value = '';
}


function saveNote() {
    if (localStorage.getItem('notes') == null) {
        localStorage.setItem('notes', JSON.stringify(arrNote));
    } else {
        let previousNotes = localStorage.getItem('notes');
        let updatedNotes = JSON.parse(previousNotes);
        updatedNotes.push(arrNote);
        localStorage.setItem('notes', JSON.stringify(updatedNotes));
    }

    saved.innerHTML = 'Сохранено!';
}

function clearStorage() {
    localStorage.clear();
    allNotes.innerHTML = '';
    arrNote = [];
    saved.innerHTML = '';
}