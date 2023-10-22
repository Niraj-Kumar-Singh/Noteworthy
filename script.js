const addBtn = document.getElementById("add-notes");
const deleteBtn = document.querySelector(".delete");
const notesContainer = document.querySelector(".notes-container");

let notes = document.querySelectorAll(".input-box");

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}

showNotes();


function updateStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML);
}

addBtn.addEventListener('click', () => {

    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    // console.log("add clicked");

    inputBox.className="input-box";
    inputBox.setAttribute("contenteditable", "true");

    img.src = "images/delete.png";
    // img.className="delete";


    notesContainer.appendChild(inputBox).appendChild(img);
    
});

notesContainer.addEventListener('click', (e) => {

    if(e.target.tagName === "IMG")
    {
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "P")
    {
        notes = document.querySelectorAll(".input-box");

        notes.forEach(note => {
            note.onkeyup = function(){
                updateStorage();
            }
        })
    }
        

    

})

document.addEventListener("keydown", (event) => {
    if(event.key === "Enter")
    {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})





