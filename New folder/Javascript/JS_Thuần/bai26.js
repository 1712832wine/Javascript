// 26. Cho một mảng là một tập các số nguyên dương không trùng giá trị, và một số k. Hãy tìm trong mảng phần có khoảng cách tử gần với k nhất. Vì có thể có nhiều đáp án in ra tất cả vào một mảng.
// VD: a = [1,2,3,4,6,7]; k = 8 .Output: [7]. giải thích: 7 gần giá trị với 8 nhất
// VD: a = [1,2,3,4,6,7]; k = 5 .Output: [4,6]
function MinDistance(a, k) {
    let result = a.reduce((min, item) => {
        min > Math.abs(item - k) ? min = Math.abs(item - k) : min;
        return min;
    }, Math.max(a));
    console.log(result);
    return a.filter(item => { return (Math.abs(item - k) === result) })
}
console.log(MinDistance([1, 2, 3, 4, 6, 7], 8));
//------------------------------