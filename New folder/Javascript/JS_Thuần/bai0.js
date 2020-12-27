// 0. Viết chương trình kiểm tra n có phải là số nguyên tố hay không?
// VD1: n =10, output: NO
// VD2: n = 5; output: YES

function IsPrime(x) {
    if (x < 2) return 0;
    if (x == 2) return 1;
    if (x % 2 == 0) return 0;
    for (let i = 3; i <= Math.sqrt(x); i += 2) {
        if (x % i == 0) return 0;
    }
    return 1;
}
console.log(IsPrime(11))