let url = ["../Img/img1.png", "../Img/img2.jpg", "../Img/img3.jpg", "../Img/img4.jpg", "../Img/img5.jpg",
    "../Img/img6.jpg", "../Img/img7.jpg", "../Img/img8.jpg", "../Img/img9.jpg", "../Img/img10.jpg"
]
let bg = "../Img/imgbg.jpg"
let cards = document.querySelectorAll(".container .card");
let count;
let stack = [];
let total;
let sec;
var time;
// ----------------------------------------
function InitBack() {
    cards.forEach(item => { item.querySelector(".back").style.backgroundImage = "url(" + bg + ")"; });
}

function IsSame(i, j) {
    return (cards[i].querySelector(".front").style.backgroundImage === cards[j].querySelector(".front").style.backgroundImage);
}

// -----------------------------------------
// mở hình
function Open(index) {
    count[index] = 1;
    cards[index].querySelector(".inner").classList.add("open");
}
//biến mất
function Disappear() {
    cards[stack[1]].querySelector(".inner").classList.add("disable");
    cards[stack[0]].querySelector(".inner").classList.add("disable");
    total -= 2;
    if (total === 0) {
        clearInterval(time);
        alert("Bạn đã chiến thắng trong " + sec + "s");
    }
}

function Wait() {
    let time = setTimeout(() => {
        //Kiểm tra 2 hình giống nhau không
        count[stack[1]] = 0;
        count[stack[0]] = 0;
        if (IsSame(stack[0], stack[1])) {
            Disappear();
        } else {
            cards[stack[1]].querySelector(".inner").classList.remove("open");
            cards[stack[0]].querySelector(".inner").classList.remove("open");
        }
        stack = [];
    }, 1000);

}

function InitClick() {
    cards.forEach((item, current) => {
        item.addEventListener("click", () => {
            // chỉ click hình chưa được mở
            if (count[current] === 0) {
                Open(current);
                stack.push(current);
                if (stack.length === 2) {
                    // hình thứ 2
                    Wait();
                }

            }
        })
    });
}
// ---------------------------------------------
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function NewGame() {
    document.querySelector("span").innerHTML = "0s";
    count = new Array(cards.length).fill(0);
    stack = [];
    total = 20;
    sec = 0;
    let shuffle = shuffleArray(url.concat(url));
    cards.forEach((card, index) => {
        card.querySelector(".inner").classList.remove("disable", "open");
        card.querySelector(".front").style.backgroundImage = "url(" + shuffle[index] + ")";
    });
}
// ----------------------------------------------------
// click for button
document.querySelector(".btn").addEventListener("click", () => {
    let btn = document.querySelector(".btn");
    btn.classList.toggle("btn-success");
    btn.classList.toggle("btn-info");
    NewGame();
    if (btn.innerText === "Start") {
        btn.innerText = "Restart";
        time = setInterval(() => {
            sec++;
            document.querySelector("span").innerText = sec + "s";
        }, 1000);
    } else {
        btn.innerText = "Start";
        clearInterval(time);
    }

});
InitBack();
InitClick();