// 12. Hãy remove tất cả khoảng trắng, space và ‘enter’ trong một chuỗi
// VD: “	Hello world   ”, output: “Helloworld”

function RemoveSpace(str) {
    return str.split(/[ \n]+/).join("")
}
console.log(RemoveSpace("Hello World \n Tri Nguyen"))