// Задание 8. Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y». Используйте шаблонные строки.

let someMap = new Map();
someMap.set(1, "first");
someMap.set("second", 2);
someMap.set(true, false);

for (let key of someMap.keys()) {
  let value = someMap.get(key);
       console.log(`Ключ — ${key}, значение — ${value}`);
    }