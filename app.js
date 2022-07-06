// UI Element
const lock = document.querySelector(".lock");
const unlock = document.querySelector(".unlock");
const deleteBtn = document.querySelector(".delete");

// Variables
let isLocked = false;
let isDelete = false;


//Lock unlock delete 
lock.addEventListener("click", lockHelper);
unlock.addEventListener("click", unlockHelper);
deleteBtn.addEventListener("click", deletehelper)


function lockHelper(e) {
    // if lock => click
    isLocked = true;
    // edit => disable
    disableEdit();

}

function unlockHelper(e) {
    // lock => click
    isLocked = false;
    showAll();
    // edit => enable
    enableEdit();

}


function deletehelper(e) {
    // isDelete = true;
    if (isDelete == false) {
        isDelete = true;
    } else {
        isDelete = false;
    }
}

function disableEdit() {
    let allTicket = document.querySelectorAll(".ticket");
    for (let i = 0; i < allTicket.length; i++) {
        // heading get => color check
        let textarea = allTicket[i].querySelector("textarea");
        textarea.setAttribute("readonly", "");
    }
}

function enableEdit() {
    // GET all the ticket
    let allTicket = document.querySelectorAll(".ticket");

    // check there heading
    for (let i = 0; i < allTicket.length; i++) {
        // heading get => color check
        let textarea = allTicket[i].querySelector("textarea");
        textarea.removeAttribute("readonly", "")

    }


}

function showAll() {

    // elem.classList.remove("clicked");

    // GET all the ticket
    let allTicket = document.querySelectorAll(".ticket");

    // check there heading
    for (let i = 0; i < allTicket.length; i++) {
        // heading get => color check

        //show
        allTicket[i].style.display = "block";


    }
    for (let i = 0; i < colorBoxes.length; i++) {
        // if => elem has class  => remove
        // doesnot=> leave
        colorBoxes[i].classList.remove("clicked");
    }


}