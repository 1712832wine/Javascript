// 9. Kiểm tra n có phải là số đối xứng?
// VD1: n=1242343, output: ‘NO’
// VD2: n = 123676321, output: ‘YES’

function DoiXung(n) {
    return n === n.split("").reverse().join("")
}
console.log(DoiXung("123454321"))