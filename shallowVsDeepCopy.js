// In JavaScript, understanding the difference between shallow and deep copying is crucial when dealing with arrays and objects.

const ogNumArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// reference variable
// const copyNumArr = ogNumArr;
// If you uncomment this line, copyNumArr would not be a new array but rather a reference to ogNumArr. This means any changes to copyNumArr would also affect ogNumArr, and vice versa, because both variables point to the same memory location in the heap.

// shallow copy
const copyNumArr = [...ogNumArr];
// Using the spread operator (...), a shallow copy of ogNumArr is created. This means that copyNumArr is a new array with the same elements as ogNumArr, but it is a separate instance in memory. Changes to copyNumArr will not affect ogNumArr, and vice versa.

copyNumArr.push(123);
ogNumArr.push(456);
console.log("ogNumArr:", ogNumArr);
console.log("copyNumArr:", copyNumArr);

// -------------------------------------------------------------
const ogObjArr = [
  { pizza: "cheese", cost: 2.99, vegetarian: true },
  { pizza: "pepperoni", cost: 3.99, vegetarian: false },
  { pizza: "margherita", cost: 4.49, vegetarian: true },
];
// shallow copy
// const copyObjArr = [...ogObjArr];
// with a shallow copy of the array of objects, the object's properties still reference the original objects' memory location in the heap. A change to one property would still affect the original object with a shallow copy.

// deep copy
const copyObjArr = JSON.parse(JSON.stringify(ogObjArr));
// However, with a deep copy of the array, the array, objects and their properties are independent from the original data and can be changed without affecting the original array, and vise versa.

ogObjArr[1].cost = 123;
copyObjArr[0].cost = 456;
console.log(ogObjArr);
console.log(copyObjArr);

console.log(
  "-----------------------------------------------------------------------------"
);
const ogObj = { a: 1, b: 2, c: 3 };

// reference variable
// const copyObj = ogObj;

// shallow copy
const copyObj = { ...ogObj };

copyObj.d = 123;
ogObj.e = 456;
console.log("ogObj:", ogObj);
console.log("copyObj:", copyObj);

// -------------------------------------------------------------
const ogNestedObj = {
  question: "What is the world's largest rodent?",
  correctAnswer: "Capybara",
  possibleAnswers: ["Capybara", "Rat", "Beaver", "Guinea Pig"],
};

// shallow copy
// const copyNestedObj = { ...ogNestedObj };

// deep copy
const copyNestedObj = JSON.parse(JSON.stringify(ogNestedObj));

ogNestedObj.possibleAnswers[2] = "Toad";
copyNestedObj.possibleAnswers[3] = "Frog";
console.log(ogNestedObj);
console.log(copyNestedObj);

console.log(
  "-----------------------------------------------------------------------------"
);
