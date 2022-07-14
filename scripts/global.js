/*  def var */
const dropdown_features = ["dropdown-content features", "Todo List", "Calendar", "Reminders", "Planning"];
const dropdown_company = ["dropdown-content company", "History", "Our Team", "Blog"];

const dropdownBox = document.getElementsByClassName("dropDown");
const menuicon = document.getElementsByClassName("menubar")[0];
const navbar = document.getElementsByTagName("nav")[0];
const closeIcon = document.getElementsByClassName("close")[0];


/*window.onload */
creatDropdownList(dropdownBox[0], dropdown_features);
creatDropdownList(dropdownBox[1], dropdown_company);
for (let i=0; i<dropdownBox.length; i++) {
    dropdownBox[i].onclick = function () {
        let button = dropdownBox[i].getElementsByTagName("button");
        let arrow = button[0].lastChild;
        let hiddenList = dropdownBox[i].getElementsByTagName("ul");
        if (hiddenList[0].style.display ==="" || hiddenList[0].style.display === "none") {
        hiddenList[0].style.display = "block";
        } else {
            hiddenList[0].style.display = "none";
        }
    }
}
menuicon.onclick = function() {
    let show = navbar.style.display;
    console.log(show);
    if (show === "" || show === "none") {
        navbar.style.display = "block";
    } else {
        navbar.style.display = "none";
    }
}
closeIcon.onclick = function () {
    navbar.style.display = "none";
}



/* console  */
//console.log(dropdownBox[0]);
//console.log(dropdownBox[1]);
//console.log(dropdownButton);
//console.log(hiddenList[0].style.display === "");
//console.log(dropdownBox[0].getElementsByTagName("button"));


/* functions */
function creatDropdownList (dropDownButton, listName) {
    /*console.log("function start");*/
    let newList = document.createElement("ul");
    for (let i=1; i<listName.length; i++) {
        
        /*console.log(listName[i]);*/
        let newLi = document.createElement("li");
        let li_content = document.createTextNode(listName[i]);
        newLi.appendChild(li_content);
        newList.appendChild(newLi);
    }
    newList.setAttribute("class", listName[0]);
    dropDownButton.appendChild(newList);
}

function clickChange (evt) {
    let button = evt.getElementsByTagName("button");
    let hiddenList = evt.getElementsByTagName("ul");
    console.log(hiddenList[0].style.display);
    if (hiddenList[0].style.display === "" || hiddenList[0].style.display === "none") {
        hiddenList[0].style.display = "block";
    } else {
        hiddenList[0].style.display = "none";
    }
}