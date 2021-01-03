// 33. [Extra]Cho một mảng là một tập các số nguyên dương, sắp xếp mảng
//  mà không dùng hàm sort() cho sẵn?
// VD: a = [9,8,7,6,4,5,3,2,1];  .Output: [1,2,3,4,5,6,7,8,9]

function Sort(a) {
    for (let i = 0; i < a.length - 1; i++) {
        for (let j = i + 1; j < a.length; j++) {
            if (a[i] > a[j]) {
                [a[i], a[j]] = [a[j], a[i]];
            }
        }
    }
    return a;
}
let a = [9, 8, 7, 6, 4, 5, 3, 2, 1]
Sort(a)
console.log(a);