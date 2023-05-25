// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// Pseudo code:

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.




// describe("", () => {
//     it("", () => {
//         expect().toEqual()
//     })
// })

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.


describe("divisibleBy3", () => {
    it("checks to see if a number is divisible by 3", () => {
        const object1 = { number: 15 }
        // Expected output: "15 is divisible by three"
        const object2 = { number: 0 }
        // Expected output: "0 is divisible by three"
        const object3 = { number: -7 }
        // Expected output: "-7 is not divisible by three"
        expect(divisibleBy3(object1)).toEqual("15 is divisible by three")
        expect(divisibleBy3(object2)).toEqual("0 is divisible by three")
        expect(divisibleBy3(object3)).toEqual("-7 is not divisible by three")
    })
})

// b) Create the function that makes the test pass.
const divisibleBy3 = (object) => {
    let myNot = "not "
    if (object.number % 3 === 0){
        myNot = ""
    }
    return `${object.number} is ${myNot}divisible by three`

}
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// Pseudo code: Create a function called divisibleBy3 that takes in a single parameter
// The parameter is an object, and inside of the object, is the number to test for division by 3
// Use the modulo operator to determine if the number evenly divisible by 3
// Use conditionals and string interpolation to return the desired output




// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.



// a) Create a test with expect statements for each of the variables provided.

describe("arrayCapitalizer", () => {
    it("capitalizes all the words in an array", () => {
        const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
        // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
        const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
        // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]
        expect(arrayCapitalizer(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect(arrayCapitalizer(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])

    })
})

// b) Create the function that makes the test pass.
const arrayCapitalizer = (array) =>  array.map(value => value.split('').map((value, index) => {
        if(index ===0){
            return value.toUpperCase()
        }
        else return value 

     }).join(''))

    //  Test Suites: 1 passed, 1 total
    //  Tests:       2 passed, 2 total

// Pseudo code:
// Create a function with an array as the only parameter.
//use the map function to iterate through the array
// split the words(elements)into their own arrays with the split() method
//use the map method to iterate through the individual elements (now arrays)
// use the .toUpperCase() method to capilize the first letter
//then join the array back into a word with the join() method





// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.


describe("vowelChecker", () => {
    it("logs the index of the first vowel", () => {
        const vowelTester1 = "learn"
    // Expected output: 1
    const vowelTester2 = "academy"
    // Expected output: 0
    const vowelTester3 = "challenges"
    // Expected output: 2
        expect(vowelChecker(vowelTester1)).toEqual(1)
        expect(vowelChecker(vowelTester2)).toEqual(0)
        expect(vowelChecker(vowelTester3)).toEqual(2)
    })
})

const vowelChecker = (string) => {
    const vowels = ["a", "e", "i", "o", "u"]
    for (let i = 0; i<string.length; i++){
        if (vowels.includes(string[i])){
        return i
        }
    }
    return "no vowels"
}
// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// b) Create the function that makes the test pass.

// Pseudo code: 
//create a function called vowelChecker
//within the function will be an array of all the vowels
//iterate through the word checking if the individual letters are contained in the vowels array with .includes()
// short circuit the function by returning the first vowel index
//because I want to short circuit the function with the first return I will use a for loop

