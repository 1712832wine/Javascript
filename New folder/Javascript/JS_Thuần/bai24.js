// 24. Cho một mảng là một tập các số nguyên dương, lọc ra một bảng b gồm tất cả các số
// là số nguyên tố? (Dùng filter)
// VD: a = [1,2,3,2,3,4,6,7] .Output: b=[2,3,2,3,7]

function IsPrime(x) {
    if (x < 2) return 0;
    if (x == 2) return 1;
    if (x % 2 == 0) return 0;
    for (let i = 3; i <= Math.sqrt(x); i += 2) {
        if (x % i == 0) return 0;
    }
    return 1;
}

function FilterPrime(a) {
    return a.filter(item => { return IsPrime(item) })
}
console.log(FilterPrime([1, 2, 3, 2, 3, 4, 6, 7]));