// Задача: Найти элемент в массиве целых чисел.

// Алгоритм:
//     Пройти по массиву с начала до конца, сравнивая каждый элемент с искомым.
//     Если элемент найден, вернуть его индекс.
//     Если элемент не найден, вернуть -1.

// Решение

// const linearSearch = (numbers, target) => numbers.indexOf(target);

const linearSearch = (numbers, target) => {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === target) {
      return i;
    };
  }
  return -1;
};

console.log(linearSearch([1, 5, 2, 5, 7, 8, 5, 9, 2, 44], 449));

// Оценить сложность алгоритма  O(n)