function Click() {
    let a = document.querySelector("#DropdownBG + .dropdown-menu").style.display
    if (a === "none" || a === "") document.querySelector("#DropdownBG + .dropdown-menu").style.display = "block";
    else document.querySelector("#DropdownBG + .dropdown-menu").style.display = "none";
}


function Change(id, color) {
    document.querySelector("#DropdownBG span").innerHTML = id.innerHTML;
    document.getElementById("form").style.backgroundColor = color;
    Click();
}