// 11. Đếm có bao nhiêu khoảng trắng trong một chuỗi?
// VD: “ Hello  world”, output: 3

function CountSpace(str) {
    return str.split(" ").length - 1
}
console.log(CountSpace("Hello World"))