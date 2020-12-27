// 1. Viết chương trình in ra các số từ 1 đến n?
// VD: n = 10, output: 1 2 3 4 5 6 7 8 9 10
function List(n) {
    return Array.from(Array(n + 1).keys())
}
console.log(List(10))