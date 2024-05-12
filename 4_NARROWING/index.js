"use strict";
// 1 - Type guard
function sum(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === "number" && typeof b === "number") {
        console.log(a + b);
    }
    else {
        console.log("Impossível fazer essa operação, tente novamente.");
    }
}
sum(15, 207);
// sum("15",80)
// 2 - Checando se valor existe
function operations(arr, operation) {
    if (operation === "sum") {
        const sum = arr.reduce((i, total) => i + total);
        console.log(sum);
    }
    else if (operation === "mult") {
        const mult = arr.reduce((i, total) => i * total);
        console.log(mult);
    }
    else {
        console.log("Por favor, defina uma operação");
    }
}
operations([1, 2, 3, 5], "sum");
operations([50, 10, 2, 3], "mult");
