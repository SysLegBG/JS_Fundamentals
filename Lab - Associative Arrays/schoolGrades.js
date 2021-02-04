function schoolGrades(data) {
    let studentRegister = {};

    for (let line of data) {
        line = line.split(" ")
        const student = line.shift();

        if (!studentRegister.hasOwnProperty(student))
            studentRegister[student] = [];

        line.forEach(grade => studentRegister[student].push(Number(grade)))
    }

    Object
        .entries(studentRegister)
        .sort((a, b) => {
            let avgGradesA = 0;
            a[1].forEach(grade => avgGradesA += grade);
            avgGradesA /= a[1].length;

            let avgGradesB = 0;
            b[1].forEach(grade => avgGradesB += grade);
            avgGradesB /= b[1].length;

            return avgGradesA - avgGradesB;
        })
        .forEach(entry => console.log(`${entry[0]}: ${entry[1].join(", ")}`))
}

schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'])