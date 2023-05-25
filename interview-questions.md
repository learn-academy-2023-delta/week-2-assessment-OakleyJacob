# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

Your answer: A parameter is the placeholder that you use when declaring a function. They go in the parenthesis and essentially tell the function to expect an argument. An argument is what you actually pass into the parenthesis when you invoke the function.

Researched answer: Parameters never have concrete values, are only placeholders.

2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer: .map is a higher order function which means it takes in a function as an argument. However, when called on an array, the three predefined parameters are value, index, and the array itself. Of these three only the value is a required parameter.

Researched answer: .map works by leveraging callback functions. These callback functions are only invoked on indices that have values. Meaning its never called on empty slots in the array.

3. What is the difference between map and filter?

Your answer: map only returns an array of the original size, while filter can remove elements from the array. Neither is destructive or mutating, and filter has a built in conditional.

Researched answer: map is forced to return something for every slot in the array that wasnt empty to begin with. This return is likely to end up as undefined if the coder is not savvy.

1. What is iteration?

Your answer: Iteration is process of repeating an action until a condition is met. Iterators in javascript include, for loops, HOFs, while nad do while loops and more.

Researched answer: Iteration is the repetition of a process to generate a sequence of outcomes. 

1. What is the difference between a function and a method?

Your answer:A method is a function that is attached to an object. 

Researched answer:Both are sets of instructions meant to perform a task. the only difference is that the method is associated with an object, while a function is not.

6. STRETCH: What is hoisting in JavaScript?

Your answer:Hoising is when the javascript interpreter moves declarations of variables or functions above their invocation or assignment, as if to make the program more user friendly.

Researched answer: Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope. Variables defined with let and const are hoisted to the top of the block, but not initialized. 

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Component: A part or element of a larger whole. In terms of react they are modular, reusable bits of code. 

2. Spread operator: The spread operator is a way of having a function take in a varying number of arguments. It also provides some handy ways of working with arrays when we are unsure of the final element count. The syntax for the spread operator is simply an ellipsis (...)

3. React state: State is a built in react object that contains data about the component. It allows us to easily managing changing data in our application. Usually updated by eventhandlers and only used by class components that are going to be rendered.

4. React props: Props are used to pass data and handlers to child components. They do not change overtime as state does, once set props are immunutable. The parent component sets the props for all of its children.

5. DOM events: DOM events are just different ways of allowing the user/browser to interact or communicate with our server. Some such events are on-click listeners, mouseovers, keyboard strokes, when other components load, and more.
