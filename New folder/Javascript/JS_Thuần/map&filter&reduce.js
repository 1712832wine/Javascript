const animals = [{
            "name": "cat",
            "size": "small",
            "weight": 5
        },
        {
            "name": "dog",
            "size": "small",
            "weight": 10
        },
        {
            "name": "lion",
            "size": "medium",
            "weight": 150
        },
        {
            "name": "elephant",
            "size": "big",
            "weight": 5000
        }
    ]
    // tạo mảng mới chứa name các con vật
let animal_names = animals.map((animal) => {
    return animal.name
})
let animal_size = animals.filter((animal, index) => {
    return animal.size == "small"
})
let total_weight = animals.reduce((weight, animal) => { return weight += animal.weight }, 0)
console.log(animal_names)
console.log(animal_size)
console.log(total_weight)
console.log(animals)