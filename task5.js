// Задание 5. Дан произвольный массив. Необходимо вывести количество элементов массива, затем перебрать его и вывести в консоль каждый элемент массива.

const lostNums = [4, 8, 15 ,16, 23, 42];
let arrLength = lostNums.length;
 console.log(arrLength);

 // 1 вариант
for (let i = 0; i < lostNums.length; i++) {
    console.log(lostNums[i])
}

// 2 вариант
lostNums.forEach(function(item) {
    console.log(item);
  });