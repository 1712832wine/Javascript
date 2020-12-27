// 4. Viết chương trình in ra các số là nguyên tố trong khoảng 1 đến n?
// VD: n = 10, output: 2 3 5 7

function SangNguyenTo(n) {
    a = Array(n + 1).fill(1)
    temp = []
    a[0] = 0;
    a[1] = 0;
    can2 = Math.sqrt(n);
    for (let i = 0; i <= can2; i++) {
        if (a[i] == 1) {
            let j = i * i;
            do {
                a[j] = 0;
                j += i;
            } while (j <= n);
        }
    }
    for (let i = 0; i <= n; i++)
        if (a[i] != 0) temp.push(i);
    return temp;
}
console.log(SangNguyenTo(100))