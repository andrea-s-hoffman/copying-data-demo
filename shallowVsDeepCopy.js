// In JavaScript, understanding the difference between shallow and deep copying is crucial when dealing with arrays and objects.

const ogNumArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// reference variable
// const copyNumArr = ogNumArr;
// If you uncomment this line, copyNumArr would not be a new array but rather a reference to ogNumArr. This means any changes to copyNumArr would also affect ogNumArr, and vice versa, because both variables point to the same memory location in the heap.

// shallow copy
const copyNumArr = [...ogNumArr];
// Using the spread operator (...), a shallow copy of ogNumArr is created. This means that copyNumArr is a new array with the same elements as ogNumArr, but it is a separate instance in memory. Changes to copyNumArr will not affect ogNumArr, and vice versa.

// deep copy
const deepCopyNumArr = JSON.parse(JSON.stringify(ogNumArr));

copyNumArr.push(123);
ogNumArr.push(456);
console.log("ogNumArr:", ogNumArr);
console.log("copyNumArr:", copyNumArr);

console.log(
  "-----------------------------------------------------------------------------"
);
const ogObj = { a: 1, b: 2, c: 3 };

// reference variable
// const copyObj = ogObj;

// shallow copy
const copyObj = { ...ogObj };

// deep copy
const deepCopyObj = JSON.parse(JSON.stringify(ogObj));

copyObj.d = 123;
ogObj.e = 456;
console.log("ogObj:", ogObj);
console.log("copyObj:", copyObj);

console.log(
  "-----------------------------------------------------------------------------"
);
