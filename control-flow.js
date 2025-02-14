/**
 * CONTROL FLOW:
 * 
 * 0: (introduction)
 * Control flow is the order in which the computer executes statments in a script. Code is run in order from the
 * first line in the file to the last line, unless the computer runs across the (extremely frequent) structures
 * that change the control flow such as conditionals and loops.
 * 
 * 1. (Explanation)
 * Control flow is controlled by the execution of control statements. Control statements execute based on specific
 * conditions. If the condition meets then a particular block of code, action will be executed, otherwise it will execute another block of action
 * that satisfies that particular condition. 
 * 
 * 
 * 2. (Examples)
 * Types of Control Statements in JavaScript
 * Conditional Statements
 *     ==> These statements are used for decision-making, a decision is made by the conditional statement based on an expression that is passed,
 *          either yes or no.
 *          Example: 
 *            function isItGoodWeather(weather) {
                    if (weather === 'sunny') { // Fixed missing closing quote
                        console.log("Let's go out!");
                        } else {
                            console.log("It's not worth it.");
                        }
                    }

 * 
 * 
 *           Example 2(Ternary Operator):
 *                var isItGoodWeather = function(weather){
 *                      return weather === sunny? "Let's go out!" : "It's not worth it.";
 * };
 * Iterative Statements
 *      ==> This is a statement that iterates repeatedly until a condition is met. Simply said, if we have an expression, the statement will keep
 *          repeating itself util and unless it is satisfied.
 *              Example:
 *              var array = ['dog', 'cat', 'chicken', 'monkey', 'lion];
 */