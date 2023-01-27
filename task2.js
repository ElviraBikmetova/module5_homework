let x;
// x = 5;
// x = 'gsdf';
// x = true;
if (typeof x === "number") {
    console.log('x - число')
} else if (typeof x === "string") {
    console.log('x - строка')
} else if (typeof x === "boolean") {
    console.log('x - логический тип')
} else {
    console.log('Тип x не определён')
}

