const notesContainer = document.querySelector(".notes-container");
const addButton = document.querySelector(".add-notes");
let notes = document.querySelectorAll(".input-box");

/* In this code, it retrieves the value associated with the key "notes" using localStorage.getItem("notes"). */
function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

/* this code takes the content inside the notesContainer element and it stores that content in the browser's local storage under the key "notes."  */

function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

/*  writing this html code with js:
<p contenteditable="true" class="input-box">
<img src="img/delete.png" >
</p>  

*/
addButton.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "img/delete.png"
  notesContainer.appendChild(inputBox).appendChild(img);
});


/* delete note when delete image is click */

notesContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.tagName === "P") {
    notes = document.querySelectorAll(".input-box");
    notes.forEach(nt => {
      nt.onkeyup = function () {
        updateStorage();
      }
    })
  }
})

/* this code listens for the Enter key press and inserts a line break at the cursor position in an editable element, preventing the default Enter key behavior. */

document.addEventListener("keydown" , event => {
    if(event.key === "Enter") {
        document.execCommand("insertLineBreak")
        event.preventDefault() /* this code block ensures that the Enter key's default behavior is overridden and that only the line break is inserted. */
    }
})

