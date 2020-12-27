// 18. Viết hàm tìm vị trí xâu X tồn tại kề cuối trong xâu Y?
// VD1:  s1: “This is a beautiful day, is it?”, s2: “is”
// 	findPosition(s2, s1) => 5
// VD2:  s1: “This is a beautiful day, is it?”, s2: “isa”
// 	findPosition(s2, s1) => -1
// VD2:  s1: “hi hi hi hi hi”, s2: “hi”
// 	findPosition(s2, s1) => 4
function FindLast(str1, str2) {
    return str1.split(" ").lastIndexOf(str2)
}
console.log(FindLast("This is a beautiful day, is it?", "is"));
console.log(FindLast("This is a beautiful day, is it?", "isa"));
console.log(FindLast("hi hi hi hi hi", "hi"));