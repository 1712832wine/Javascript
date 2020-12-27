// 14. Nhập vào chuỗi s1 và s2, cho biết vị trí xuất hiện của chuỗi s2 trong s1.
// VD: s1: “This is a beautiful day”, s2: “is” => output: 1

function IndexWord(str, sub) {
    return str.split(" ").findIndex((item) => { return (item == sub) })
}
console.log(IndexWord("Nguyen Hửu Tri", "Hửu"))