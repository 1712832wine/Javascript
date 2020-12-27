// 17.  Viết hàm số tính min, max của 3 số?
// VD: min(2,4,7) => output: 7
function min(a) {
    return Math.min(...a)
}
console.log(min([5, 2, 3, 2]))