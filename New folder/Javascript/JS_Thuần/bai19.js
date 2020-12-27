// 19.  Hãy tính tổng các số từ 1 đến n mà không dùng for, while loop? (đệ quy, recursive)
// VD: total(9) => output: 45
function sum(n) {
    if (n === 0) return 0;
    else return n + sum(n - 1);
}
console.log(sum(10))