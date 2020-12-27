// 23. Cho một mảng là một tập các số nguyên, tìm số có tần suất xuất hiện nhiều nhất?
// VD: a = [1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1] .Output: 3
function TanSoCao(a) {
    return a.reduce((prev, curr) => (prev[curr] = prev[curr] + 1 || 1, prev), {})
}
console.log(TanSoCao([1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
//----------------------------