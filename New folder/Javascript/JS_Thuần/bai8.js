//Kiểm Kiểm tra số n có toàn số lẻ tạo thành hay không?
//VD1: n=1234, output: ‘NO’
//VD2: n=135, output: ‘YES’

function IsOdd(n) {
    let a = n.toString().split("")
    b = a.filter((item) => { if (parseInt(item) % 2 === 1) return item })
    return a.length === b.length
}
console.log(IsOdd(13))