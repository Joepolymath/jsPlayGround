// Currying in JavaScript
// Question1: sum(2)(6)(1)

// In currying, a function takes one argument at a time, returning a new function that accepts the next argument, and so on...

function sumWithoutCurrying(a, b, c) {
  return a + b + c;
}

// my solution
function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
console.log(sumWithoutCurrying(2, 6, 1));
console.log(sum(2)(6)(1));

/**
 * Question2: Using currying
 *    evaluate("sum")(4)(2) => 6
 *    evaluate("substract")(4)(2) => 2
 *    evaluate("multiply")(4)(2) => 8
 *    evaluate("divide")(4)(2) => 2
 */

// My solution
function evaluate(useCase) {
  const useCases = ['sum', 'substract', 'multiply', 'divide'];
  if (!useCases.includes(useCase))
    throw "Use case not accepted. Use either 'sum', 'substract', 'multiply' or 'divide' ";

  switch (useCase) {
    case 'sum':
      return function (a) {
        return function (b) {
          return a + b;
        };
      };

    case 'substract':
      return function (a) {
        return function (b) {
          return a - b;
        };
      };

    case 'multiply':
      return function (a) {
        return function (b) {
          return a * b;
        };
      };

    case 'divide':
      return function (a) {
        return function (b) {
          return a / b;
        };
      };
    default:
      break;
  }
}

console.log(evaluate('sum')(4)(2), 'Summed');
console.log(evaluate('substract')(4)(2), 'substracted');
console.log(evaluate('multiply')(4)(2), 'multiplied');
console.log(evaluate('divide')(4)(2), 'divided');
console.log(evaluate('wrong command')(4)(2), 'error');
