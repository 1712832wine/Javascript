// 16. Viết chương trình lấy  id name của fb.
// VD: “https://www.facebook.com/ngothucdat”, output: “ngothucdat”
function GetFBName(str) {
    return str.replace("https://www.facebook.com/", "")
}
console.log(GetFBName("https://www.facebook.com/ngothucdat"))