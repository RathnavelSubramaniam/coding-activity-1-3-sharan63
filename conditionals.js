let students = [
    { name: "Arun", age: 33 },
    { name: "Bala", age: 20 },
    { name: "Kumar", age: 18 },
    { name: "Ravi", age: 17 },
    { name: "Sita", age: 19 },
    { name: "Anita", age: 15 },
];

for (let student of students) {
    if (student.age >= 18) {
        console.log(student.name + " - Eligible");
    } else {
        console.log(student.name + " - Not Eligible");
    }
}