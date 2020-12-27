// 2. Viết chương trình in ra các số lẻ từ 1 đến n ?
// VD : n = 10, output: 1 3 5 7 9

function IsOdd(n) {
    let temp = [];
    for (let i = 0; i <= n; i++) {
        if (i % 2 == 1) temp.push(i);
    }
    return temp;
}
console.log(IsOdd(10))