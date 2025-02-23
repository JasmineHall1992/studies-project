/**
 * LOOPS:
 * 
 * 0: (introduction)
 * Loops are built in constructs, or features of JavaScript, that allows us to execute a block of code as many times as needed. They are particularly handy for iterating over collections of 
 * data. In doing so, we can pull out the values of a collection to work with them, one by one. There are many different types of loops, but the ones used in class are the : standard "for" loop,
 * the "for in" loop, and 
 * 1. Examples
 *      ===> The standard "for loop" has three parts to define without a parenthesis: the start condition, the stop condition and the incrementor. These three steps are followed by a block 
 * of code that is executed for each step of the loop. This is used to iterated through indeces in an array.
 *          ====> forwards loop
 *                  for (let i = 0; i < array.length; i++){
 *                      console.log(array[i]);
 *                  }
 *          ====> backwards loop
 *                  for (let i = array.length - 1; i > -1; i--) {
 *                        console.log(array[i]);
 *                  }
 * 
 *        
 *     ====> The "for in" loop is used to iterate through keys in an object. This is structured with the word "for", then a variable to represent the keys, then the object. The block of code
 *  that follows will be executed for each step of the loop. You dont need a stopping condition or incrementor, because the for in loop will only cycle through the keys in your object then stop.
 *          ====> var helloWorld = { spanish: "hola mundo!",    
 *                                   french: "bonjour le monde",
 *                                   lithuanian: "labas pasuali!"
 *                                  };
 *              ====> for (var key in helloWord){
 *                          console.log(helloWord[key]);
 *                          }  
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */   