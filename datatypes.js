/**
 * DATATYPES:
 * 
 * 0: (introduction)
 * Datatypes in JavaScript describe the different types or the kinds of data you will be working with and storing in variables. It is important to learn each of the different data types
 * because otherwise data can get stored in an improper format which will result in issues in the code later on. There are two categories in which datatypes fall into: primitive, also
 * known as simple or complex.
 * 
 * 1: Simple Datatypes
 * Simple datatpes are atomic and immutable. This means that they do not hold, collect, or aggregate other values. Operations on simple values return new simple values, they do not alter 
 * the original value. Simple datatypes are also copy by value, which means when assigning or passing, simple data-types are copied from one variable to the next.  There are six different
 * simple datatypes: Number, String, Boolean, NaN, undefined, and null.
 *      ===> Examples of each:
 *          ===> Number: Numeric Data
 *                  let age = 32;
 * 
 *          ===> String: Character Data
 *                  let name = "Jasmine";
 * 
 *          ===> Boolean: true or false data
 *                  let isCodingFun = true;
 *                  let amIBored = false;
 * 
 *          ===> NaN : Not-A-Number
 *                  let result = "hello" * 3;
 *                  console.log(result); // Output: NaN
 * 
 *          ===> undefined: no value, not initialized
 *                  let user;
 *                  console.log(user); // Output: undefined
 * 
 *          ===> null: no value, intentionally nullified by a programmer
 *                  let emptyValue = null;
 * 
 * 2. Complex Datatypes
 * Complex datatypes aggregate other values and therefore they are of indefinite size. Complex datatypes are also copy by reference, which means when assigning or passing, complex datattypes
 * are passed by reference. Examples of complex datatypes are: objects, arrays and functions.
 *      ===> Examples of each
 *        ===> Objects: Stored various keyed collections {}
 *              let movies = { title: "Black Panther", year: 2018, genre: "action" };
 *                             NESTED MOVIE OBJECT
 *              let movies = {
 *                              collectionName: "Top Sci-Fi Movies",
 *                              totalMovies: 3, 
 *                              moviesList: [
 *                                            {
 *                                              title: "Inception",
 *                                              director: "Christopher Nolan"}, {
 *                                              title: "Sinners",
 *                                              director: "Ryan Coogler"}  
 *                                              ]}
 *        ===> Arrays : Indexed list-lke objects []
 *              let animals = ["dog", "cat", "chicken", "cow"];
 *        ===> Functions : set of statemnents that performs a task or calculates a value
 *              function isDog(animals) {
                    let output = []; // Correctly initializing output

                    for (let i = 0; i < animals.length; i++) {
                        if (animals[i] === 'dog') {  // Checking for 'dog'
                            output.push(animals[i]); // Pushing 'dog' to the array
                     }
                }

                    return output; // Returning the filtered array AFTER the loop finishes
            }

 * 
 * 
 */
