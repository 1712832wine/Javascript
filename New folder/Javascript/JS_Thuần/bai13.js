// 13. Hãy viết chương trình đảo ngược sau s.
// VD: “This is a beautiful day”, output: ”yad lufituaeb a si sihT”

function ReverseWord(str) {
    //words = str.split(" ")
    return str.split("").reverse().join("")
        //Đảo ngược từng từ
        //words.map(item => { return item.split("").reverse().join("") }).join(" ")
}
console.log(ReverseWord("Nguyen Huu Tri"))