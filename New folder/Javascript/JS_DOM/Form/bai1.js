//giúp render ra name, birthyear, age
function Submit() {
    var today = new Date().getFullYear();
    var year = document.getElementById("inputbirthyear").value;
    if (Number(year) > today) {
        alert("Birthyear is invalid, please type your birthyear again!!!");
    } else {
        document.getElementById("name").innerHTML = "Hello: " + document.getElementById("inputname").value
        document.getElementById("birthyear").innerHTML = "Birthyear: " + year;
        document.getElementById("age").innerHTML = "Age: " + (today - year);
    }
}