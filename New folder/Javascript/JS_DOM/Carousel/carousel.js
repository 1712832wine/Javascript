let cur = 0;
let num = document.querySelector(".list-img").children.length;

function Change() {
    document.querySelector(".list-img .active").classList.remove("active");
    document.querySelector(".list-indicator .active").classList.remove("active");
    document.querySelectorAll(".img")[cur].classList.add("active");
    document.querySelectorAll(".indicator")[cur].classList.add("active");
}

document.querySelector(".btn-prev").addEventListener("click", () => {
    cur === 0 ? cur = num - 1 : cur -= 1;
    Change();
})

document.querySelector(".btn-next").addEventListener("click", () => {
    cur === num - 1 ? cur = 0 : cur += 1;
    Change();
})

let Indicators = document.querySelectorAll(".list-indicator .indicator");
for (let i = 0; i < Indicators.length; i++) {
    Indicators[i].addEventListener("click", () => {
        cur = i;
        Change();
    });
}