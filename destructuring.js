// Destructuring is a convenient way to extract values from arrays or properties from objects into distinct/global variables.
const exampleObj = {
  calories: 90,
  fat: 2,
  cholesterol: 0,
  sodium: 35,
  carbohydrates: 22,
  protein: 1,
  sugars: 12,
};

// Dot notation without destructuring
console.log(exampleObj.sodium); // 35

// Basic Object destructuring
const { calories, fat, protein } = exampleObj;
console.log(calories); // 90
console.log(fat); // 2
console.log(protein); // 1
// console.log(sodium); // ERROR

// Renaming variables
const { carbohydrates: carbs } = exampleObj;
console.log(carbs); // 22

// Using the spread operator to gather the remaining properties
const { sodium, sugars, carbohydrates, ...theRestOfTheObj } = exampleObj;
console.log(theRestOfTheObj); // {calories: 90, fat: 2, cholesterol: 0, protein: 1}

console.log(
  "-----------------------------------------------------------------------------"
);
const exampleArr = ["Yulia", "Tyler", "Nick", "Manogna", "James", "Andrea"];

// Basic array destructuring
const [firstPerson, secondPerson] = exampleArr;
console.log(firstPerson); // "Yulia"
console.log(secondPerson); // "Tyler"

// Skipping elements
const [, , third] = exampleArr;
console.log(third); // "Nick"

// Using the spread operator to gather the remaining elements
const [, , , fourth, ...theRestOfClass] = exampleArr;
console.log(fourth); // "Manogna"
console.log(theRestOfClass); // [ 'James', 'Andrea' ]
