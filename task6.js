// Задание 6. Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.

let commonArr = [13, 13, 20, 45, 66, 20, 18, 15, 20];
let commonArr2 = [13, 13, 13];
let commonArr3 = [13, 13, '13'];
let commonArr4 = ['yes', 'no', '13'];
let commonArr5 = ['yes', 'yes', 'yes'];

// 1 вариант 
let check;
for (let i = 0; i < commonArr5.length; i++) {
  if (commonArr[i] == commonArr[0]) {
    check = true;
  } else {
    i = commonArr.length;
    check = false;
  }
}
console.log(check)

// 2 вариант
let uniqeArr;
function unique(arr) {
  uniqeArr = Array.from(new Set(arr));
}
unique(commonArr);
if (uniqeArr.length === 1) {
  console.log(true)
} else {
  console.log(false)
}