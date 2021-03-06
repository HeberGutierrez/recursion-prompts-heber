// Define function multiplyBy10()
function multiplyBy10(number) {
  return number * 10;
}


for (let i = 0; i <= 10; i++) {
  console.log(i);
}


//PUT THAT LOOP IN A function
function countTo(int) {
  for (let i = 1; i <= int; i++) {
    console.log(i);
  }
}
countTo(5);

//NESTED FUNCTIONS AND LOOPS
function multiplyBy10(number) {
  console.log(number * 10);
}

function multiplesOf10(limit) {
  // Put your for loop here
  for (let i = 1; i <= limit; i++) {
    multiplyBy10(i);
  }
}

// Call the function multiplesOf10() on any integer
multiplesOf10(5);



//factorial
function factorial(n) {
  if (n === 0) {
    return 1;
  }

  // This is it! Recursion!!
  return n * factorial(n - 1);
}
factorial(10);



//BASE CASE AND RECURSIVE CASE
function factorial(n) {
  // This is our Base Case - when n is equal to 0, we stop the recursion
  if (n === 0) {
    return 1;
  }

  // This is our Recursive Case
  // It will run for all other conditions except when n is equal to 0
  return n * factorial(n - 1);
}
factorial(5);



//TERMINATION conditions
function factorial(n) {
  if (n < 0) {
    // Termination condition to prevent infinite recursion
    return console.log(n);
  }
  // Base case
  if (n === 0) {
    return 1;
  }
  // Recursive case
  return n * factorial(n - 1);
}

factorial(-1);
factorial(5);


//ARGUMENTS IN Recursion
function factorial(n) {
  // Termination condition to prevent infinite recursion
  if (n < 0) {
    console.log("Can't make a factorial from a negative number.");
    return;
  }
  // Base case
  if (n === 0) {
    return 1;
  }
  // What's wrong with this picture? Why won't this recursion work?
  return n * factorial(n - 1);
}

factorial(6);

//YOU CAN TRY define a base CASE
function factorial(n) {

  // Put your code here.
  if (n < 0) {
    console.log("Can't make a factorial from a negative number.");
    return n;
  }
  // Base case
  if (n === 0) {
    return 1;
  }
  // What's wrong with this picture? Why won't this recursion work?
  return n * factorial(n - 1);

}


//COUNTING SHEEP

// Here is the function using a for loop
function countSheepWithLoop(number) {
  for (i = 1; i <= number; i++) {
    if (i === number) {
      console.log("Zzzzzz");
    }
    console.log("Another sheep jumps over the fence.");
  }
}

// And here is the recursive function
function countSheep(number) {
  if (number === 0) {
    console.log("Zzzzzz");
  } else {
    console.log("Another sheep jumps over the fence.");
    // Define the variable newNumber as
    // 1 less than the input variable number
    var newNumber = number - 1;
    // Recursively call the function
    // with newNumber as the parameter
    countSheep(newNumber);
  }
}

// Call your new recursive function:
console.log("The recursive function returned: " + countSheep(5));