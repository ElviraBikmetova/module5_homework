let value = +prompt("Введите значение");
if (typeof value === "number") {
  if (isNaN(value)) {
    console.log("Упс, кажется, вы ошиблись");
  } else if (value % 2 === 0) {
    console.log("Число четное");
  } else {
    console.log("Число нечетное");
  }
}
