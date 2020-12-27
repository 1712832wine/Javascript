// 15. Viết chương trình chuẩn hóa họ tên.
// VD: “NguyeN THI tho tHu hA”, output: “Nguyen Thi Tho Thu Ha”
function ChuanHoa(str) {
    return str.trim().toLowerCase().split(/[ \n]+/).map(item => { return item[0].toUpperCase() + item.substr(1) }).join(" ")
}
console.log(ChuanHoa("   NguyeN  THI  tho    tHu      hA   "))