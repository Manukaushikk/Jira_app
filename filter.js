const Colors = ["orange", "blue", "pink", "green"];
const colorBoxes = document.querySelectorAll(".color-boxes");
for (let i = 0; i < colorBoxes.length; i++) {
    colorBoxes[i].addEventListener("click", filterTickets);
}

function filterTickets(e) {
    // click => first click =>clicked
    if (isLocked == false) {
        alert("First lock it");
        return;
    }
    // Colors Option check ho rha hai isme
    let elem = e.currentTarget;
    let childElemArr = elem.children;
    let clickedColor = childElemArr[0].classList[1];;
    let secondClass = elem.classList[1];
    if (secondClass == "clicked") {
        showAll(elem);
    } else {
        // Remove clicked from every any previously clicked  colorBoxes
        for (let i = 0; i < colorBoxes.length; i++) {
            // if => elem has class  => remove
            // doesnot=> leave
            colorBoxes[i].classList.remove("clicked");
        }
        elem.classList.add("clicked");
        // ~~~~~~~Show only my Color ~~~~~~~~~~~~~  
        // color;
        Showonlymycolor(clickedColor);
    }
}

function Showonlymycolor(clickedColor) {
    // GET all the ticket
    let allTicket = document.querySelectorAll(".ticket");

    // check there heading
    for (let i = 0; i < allTicket.length; i++) {
        // heading get => color check
        let header = allTicket[i].children[0];
        let headerColor = header.classList[1];
        if (headerColor == clickedColor) {
            //show
            allTicket[i].style.display = "block";
        } else {
            // Show
            allTicket[i].style.display = "none";
        }

    }
}