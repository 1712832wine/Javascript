// 3. Viết chương trình in ra các số chẳn từ 1 đến n?
// VD: n = 10, output: 2 4 6 8 10

function IsEven(n) {
    let temp = [];
    for (let i = 0; i <= n; i++) {
        if (i % 2 === 0) temp.push(i);
    }
    return temp;
}
console.log(IsEven(10))