// 6. Viết chương trình tính tổng bình phương của các số từ 1 đến n?
// VD: n = 3, output: 14

function Sum2(n) {
    let a = 0
    for (let i = 1; i <= n; i++)
        a += i * i;
    return a;
}
console.log(Sum2(3))