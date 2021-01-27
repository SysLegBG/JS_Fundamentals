function calc(n1, operator, n2) {
    switch (operator) {
        case "+":
            console.log((n1 + n2).toFixed(2));
            break;
        case "-":
            console.log((n1 - n2).toFixed(2));
            break;
        case "*":
            console.log((n1 * n2).toFixed(2));
            break;
        case "/":
            console.log((n1 / n2).toFixed(2));
            break;
    }
}

calc(5, '+', 10)