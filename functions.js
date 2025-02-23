/**
 * FUNCTIONS:
 * 
 * 0: (introduction)
 * Functions allow us to encapsulate a block of code, and execute that block of code whenever we want and how ever many times we want. While numbers are numeric data, and strings are character data, we can think
 * of functions as logic data. Like a recipe is a set of instructions, so functions are a list of instructions. Functions encapsulate a block of code. You can pass around this block of code in your program, and
 * execute the instructions at some later point.
 * 
 * 1: The two phases of using Functions
 *      declaration/definition: creating the function
 *          ====> Before you can use your function, you must first define your function. This is simply the process of designing some code you want to execute when your function is called. Like when you bake cookies,
 * someone must write down the cookie recipe and give you the recipe. The keyword to declare a Function is "function".
 *                  Example/Syntax:
 *                      function(parameterOne, parameterTwo){
 *                          ///function body: code goes here, NOTE indentation!
 *                          }
 *            ====> When designing functions we can list any number of required inputs and we call those inputs parameters. You should always name your parameters so that it is crystal clear what needs to be
 * provided when executing the function. Functions return a single output, by default, functions will return undefined. Otherwise, we can explicitly return value by using the return keyword followed by a value.
 *                  Example:
 *                      function(numOne,numTwo){
 *                          return numOne + numTwo;
 *                        }
 * 
 * 
 *      invocation/calling/executing/applying: using the function
 *          ====> To use a Function, we have to call it. Calling a Function will run the code within the body or code block of the function. Executing, invoking, applying, running are all synonymous with calling a
 *  Function.
 *              ====> Arguments
 *                      arguments or inputs are what we call the values passed t a function when we execute the function. You can think or arguments like passengers, and parameters like car seats. If we defined a function
 * with two parameters, thats two car seats, when we call that function, we will pass in two values, thats the two passengers, one for each car seat. To call a Function, you must reference its name or the variable
 * name to which its assigned, then pass any values expected. All functions are expressions, because they produce a value!
 *                  Example:
 *                      const add = function(numOne, numTwo){
 *                                      return numOne + numTwo;
 *                                    } 
 *                      const sum = add(1, 1);
 *                      console.log(sum); // prints 2
 * 
 * 
 * 
 * 
 *                     const add = function(numOne, numTwo){
 *                                      return numOne + numTwo;
 *                                   }
 *                      console.log(add(1, 1)); // prints 2
 * 
 */