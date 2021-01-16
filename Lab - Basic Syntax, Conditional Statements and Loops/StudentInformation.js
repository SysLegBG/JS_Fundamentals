function solve(name, age, grade){
    age = Number(age);
    grade = Number(grade);

    console.log(`Name: ${name}, Age: ${age}, Grade: ${grade.toFixed(2)}`);
}

solve('John', 15, 5.54678)