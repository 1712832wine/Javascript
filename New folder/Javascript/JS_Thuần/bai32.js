// 32. Cho một mảng là một tập các số nguyên dương theo thứ tự tăng dần, và một số k. Hãy chèn k
// vào mảng và đảm bảo mảng ko mất tính tăng dần
// VD: a = [1,3,6,9,11,20]; k = 13 .Output: a = [1,3,6,9,11,13,20]
function AddK(a, k) {
    let index = a.findIndex(item => { return item > k });
    a.splice(index, 0, k);
    return a;
}
console.log(AddK([1, 3, 6, 9, 11, 20], 13));