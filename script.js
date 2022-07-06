const main = document.querySelector(".main");
const addbtn = document.querySelector(".add");

// Creation of Tickets
// 1. When + is clicked then ticket will be created
addbtn.addEventListener("click", function() {

    if (isLocked == true) {
        alert("First Unlock It");
        return;
    }
    // createTicket();
    handleCreation();

});
// ~~~~~~~~Change BackGroung => Color Boxes~~~~~~~~ 
// Ticket Creations
function handleCreation() {
    // 2. main => ticket Add
    isDelete = false;
    let id = uuidv4();

    // log creating a box => it will exists
    createModal(id);

}

function createModal(id) {
    let ccolor = "black";
    let modal = document.createElement("div");
    modal.setAttribute("class", "modal");
    modal.innerHTML = `
            <textarea class="contentarea"
            placeholder="Enter some Task"
            ></textarea>
            <div class="pallet_container">
                <div class="pallet_color pink"></div>
                <div class="pallet_color blue"></div>
                <div class="pallet_color green"></div>
                <div class="pallet_color black "></div>
            </div>`;
    main.appendChild(modal);
    // color choose 
    let allColors = modal.querySelectorAll(".pallet_color");
    for (let i = 0; i < allColors.length; i++) {
        allColors[i].addEventListener("click", function(e) {
            ccolor = allColors[i].classList[1];
        })
    }
    // color code 
    modal.addEventListener("keypress", function(e) {
        let key = e.key;
        if (key == "Enter") {
            // get text, color
            let textarea = modal.querySelector("textarea");
            let text = textarea.value;
            // destory;
            modal.remove();
            // return text color
            createTicket(id, ccolor, text);
        }
    })
}



function createTicket(id, Colors, text) {
    // 2.Main => ticket add 
    let ticket = document.createElement("div");
    ticket.setAttribute("class", "ticket");
    // <div class="ticket">
    ticket.innerHTML = ` 
    <div class="ticket-header ${Colors}"></div>
    <div class="ticket-content">
        <div class="ticket-id">
         #${id}        
        </div>
        <textarea name=""${text}></textarea>
    </div>`;

    main.appendChild(ticket);
    // ticket should have some functionality
    // lock and unlock
    // change colors => header pr click ho change the color(oscillation)
    let header = ticket.querySelector(".ticket-header");
    header.addEventListener("click", changecolor);
    ticket.addEventListener("click", deleteticket);
}

function changecolor(e) {
    // e.currentTarget give the element on which event has happened
    let header = e.currentTarget;
    //    i have html element and classes can be used to identify that
    //  element and set another class to modify it's behaviour 
    // list of all the classes on an element 
    let Classes = header.classList;
    let ccolor = Classes[1];
    // alert(ccolor);
    // check idx => next element uspe put

    let cIdx = 0;
    for (let i = 0; i < Colors.length; i++) {
        if (ccolor == Colors[i]) {
            cIdx = i;
            break;

        }
    }
    let nextIdx = (cIdx + 1) % Colors.length;
    let nextColor = Colors[nextIdx];
    Classes.remove(ccolor);
    Classes.add(nextColor);


}

function deleteticket(e) {
    if (isDelete == true) {
        e.currentTarget.remove();
    }
}










console.log("Manu Kaushik");