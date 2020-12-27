// 27. Cho một mảng là một tập hợp các học viên trong lớp REACTJS, mảng là một tập 
//hợp object của học viên gồm 3 thông tin: id, firstName, lastName, và age.Hãy đưa
// tên và họ về chuẩn tên với ký tự đầu tiên của tên Viết Hoa và tìm tất cả học viên
// có tên tồn tại chữ cái“ a” hoặc“ A” và tên dài hơn hoặc bằng 3 ký tự.
// VD: students = [{
//         id: "T3HXX1",
//         firstName: "NgAN",
//         lastName: "Duong Thuy"
//     },
//     {
//         id: "T3HXX2",
//         firstName: "Ha",
//         lastName: "Do Thi Thu"
//     },
//     {
//         id: "T3HXX5",
//         firstName: "Minh",
//         lastName: "Nguyen Nhat"
//     }
// ]
// Output: [{
//     id: "T3HXX1",
//     firstName: "Ngan",
//     lastName: "Duong Thuy"
// }]
let students = [{
        id: "T3HXX1",
        firstName: "NgAN",
        lastName: "Duong Thuy"
    },
    {
        id: "T3HXX2",
        firstName: "HA",
        lastName: "DO THi Thu"
    },
    {
        id: "T3HXX5",
        firstName: "MiNh",
        lastName: "NguyEn NhAt"
    }
]

function ChuanHoa(str) {
    return str.trim().toLowerCase().split(/[ \n]+/).map(item => { return item[0].toUpperCase() + item.substr(1) }).join(" ")
}

function ChuanHoaStudent(students) {
    return students.map(item => {
        item.firstName = ChuanHoa(item.firstName);
        item.lastName = ChuanHoa(item.lastName);
        return item;
    })
}

function FilterStudent(students) {
    return students.filter(item => {
        return (item.firstName.includes('a') || item.firstName.includes('A')) && item.firstName.length >= 3
    })
}
students = ChuanHoaStudent(students)
console.log(FilterStudent(students))