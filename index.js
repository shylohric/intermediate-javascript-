// solution to making the arrray Q1
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages);

// solution to subtractioning first  index from last index and is dynamic Q1A
subAges = ages[ages.length -1] - ages[0];
console.log(subAges);

// solution to pushing a new value into ages and showing that the subration variable is dynamic Q1B
ages.push(95);ages
subAges = [ages.length -1] - ages[0];
console.log(ages);
console.log(subAges);

//  average of ages array using a for loop to get total and dividing by ages.length Q1C

let totalAge = 0;

for (i = 0; i < ages.length; i++) {
     totalAge += ages[i];
}
let averageAge = totalAge / ages.length;
console.log(averageAge);

// names array Q2
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
//  average length of names array Q2A
let totalNames = 0;

for(i =0; i < names.length; i++) {
    totalNames += names[i].length;
}

let averageNames = totalNames / names.length;
console.log(averageNames);

// make the array a single string include spaces between indexs Q2B
concatenateNames = "";
for (i = 0; i < names.length; i++) {
    concatenateNames += `${names[i]} `
}
console.log(concatenateNames);

// how to grab the last index in a array Q3
let array = [0, 1, 2, 3]
let lastArray = array[array.length - 1];
console.log(lastArray);

// due to zero indexing just grab at index 0 Q4
console.log(array[0]);

// change names array into the amount of characters is present in each element Q5
let arrayLengths = [];
for (i = 0; i < names.length; i++ ) {
    arrayLengths.push(names[i].length)
}
console.log(arrayLengths);

// sum of arrayLengths array Q6
let sumOfArrayLengths = 0;
for (i = 0; i < arrayLengths.length; i++) {
    sumOfArrayLengths += arrayLengths[i];
}
console.log(sumOfArrayLengths);

// function concat Q7
function concatQ7(word, n) {
    let repeat = word.repeat(n);
    console.log(repeat);
}
concatQ7("hello", 3)

// concat strings Q8
function fullName(firstName, lastName) {
    let fullName = `${firstName} ${lastName}`;
    console.log(fullName);
}
fullName("John", "Smith");

// Summing an array within a function Q9
let greaterThan100 = [40, 50, 60]
let lessThan100 = [4, 5, 6]
function testing100(arr) {
    let totalArr = 0;
    for (let i = 0; i < arr.length; i++) {
        totalArr += arr[i]
    }
    if (totalArr >= 100) {
        console.log(true);
    } else {
        console.log(false);
    }
} 
testing100(greaterThan100);
testing100(lessThan100);

//average of an array by function Q10
function averageOfNumbers(arr) {
    let totalSum = 0;
    for (let i = 0; i < arr.length; i++) {
        totalSum += arr[i];
        console.log(totalSum);
    }
    let average = totalSum / arr.length;
    console.log(average);
}  
 averageOfNumbers(lessThan100);

 // functions boolean Q11
 function compareArray(arr1, arr2) {
    let totalSum1 = 0;
    let totalSum2 = 0;
    for (let i = 0; i < arr1.length; i++) {
        totalSum1 += arr1[i];
        console.log(totalSum1);
    }
    for ( let i = 0; i < arr2.length; i++) {
        totalSum2 += arr2[i];
        console.log(totalSum2);
    }
    let avg1 = totalSum1 / arr1.length;
    let avg2 = totalSum2 / arr2.length;
    return avg1 > avg2;
 }
 console.log(compareArray(greaterThan100, lessThan100));

 // function working with boolean and && Q12
 let isHotOutside = true;
 let moneyInPocket = 12.00;
 function willBuyDrink(isHotOutside, moneyInPocket) {
    if (isHotOutside === true && moneyInPocket > 10.50) {
        return true;
    }
 } console.log(willBuyDrink(isHotOutside, moneyInPocket));

 // My function will locate a specific string within an array Q13
let listOfNames = ["John", "Ryan", "emily", "jasmine", "Bob"]
 function locateName(name, search) {
    let lowerCaseSearch = search.toLowerCase();
    return name.some(element => element.toLowerCase() === lowerCaseSearch); 
 }

 console.log("JOHN");
