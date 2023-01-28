// Задание 7. Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.

let someArr = [7, 42, 0, 'ok', null, '*', true, '15', ''];
let someArr2 = [7, 42, 6, 9, 17, 24, 10, 0];
let even = 0;
let odd = 0;
let zero = 0;

// if (typeof someArr[i] === "number" || typeof someArr[i] === "string") {}

// if (!isNaN(someArr[i]) || someArr[i] !== null) {}

for (let i = 0; i < someArr.length; i++) {
    if ((typeof someArr[i] === "number" || typeof someArr[i] === "string") && someArr[i] === "") {
      let itemOfArr = +someArr[i];
      debugger
        if (isNaN(itemOfArr) || itemOfArr === null) {}
        else {
            if (itemOfArr === 0) {
                zero++
              } else if (itemOfArr % 2 === 0) {
                    even++
                } else {
                    odd++
                }
        }
    }
}
console.log(even, odd, zero);


// number
// Number(true) // => 1
// Number(false) // => 0
// Number(null) // => 0
// Number(NaN) // => NaN
// Number("") // => 0
// Number("12") // => 12
// Number("0012") // => 12
// Number("abc") // => NaN