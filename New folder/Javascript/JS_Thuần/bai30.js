// 30. Cho một mảng là một tập các số nguyên dương, tìm số lớn thứ nhì trong mảng, 
// không có thì in ra -1?
// VD: a = [1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1] .Output: 8
// VD: a = [1,1,1,1,1,1,1,1,1,1], output: -1
function BigSecond(a) {
    max = Math.max(...a);
    a = a.filter(item => { return item != max })
    if (Math.max(...a) != "-Infinity") return Math.max(...a);
    else return -1;
}
console.log(BigSecond([1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
console.log(BigSecond([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));