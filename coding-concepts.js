// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Delta 2023"
console.log(cohort.split(""))

// a) Your answer:["D", "e", "l", "t", "a", "2", "0", "2", "3"]
// b) Verify and explain: ['D', 'e', 'l', 't', 'a', ' ', '2' , '0', '2', '3]
// The .split method will split a string up at a specific delimiter, if an empty string is used as the delimiter it splits the string up by character

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer:'Hello, Learn Studen"
// b) Verify and explain: definitely logged undefined, the function is missing its return statement
// tricksy hobbitses

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
console.log(multipliedByTwo)

// a) Your answer:[8, 10, 12, 14, 16]
// b) Verify and explain: .map is a higher order function that applies any function passed as an argument to the individual elements of the array it was called on

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer:[11, 13, 15]
// b) Verify and explain:.filter is an HOF that returns a smaller array than the original, and has a built in conditional. It essentially says, pass this value into the new array IF this thing is true.


// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: 'javascript'
// b) Verify and explain:object and dot notation dictate that to reach elements inside javascript objects you use the . operator, and to access an element of an array(even an embedded one) we use bracket notation. 

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Delta"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: {student: George, cohort: "Delta", year: 2023}
// b) Verify and explain: the method on 67 creates a new student named george based on the class above, the class takes in the name argument and applies it to the student field while the other variables that are static
