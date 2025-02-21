/**
 * STRING MANIPULATION:
 * 
 * 0: (introduction)
 * In javascript strings are a sequence of characters. There are treated as primitive data types. In JavaScript, strings are automatically converted to string objects when using string methods
 * on them. This process is called autoboxing. There are a few string methods we use but, let's address the most common ones we have seen in class.
 * 1. Examples
 *  Slice()
 *      ===> slice extracts a part of the string based on the given stating-index and ending-index and returns a new string, it extracts a section of an array or string and returns a new
 *           array or string without modifying the original.
 *              slice(start,end); // we use slice in recursion as well to return the rest of the array we are recursing (slice can work on arrays or strings)
 *                  Example: 
 *                      const array = [1, 2, 3, 4, 5];
 *                      const newArray = array.slice(1, 4); // returns [2, 3, 4];
 *                      const string = "hello";
 *                      const newString = string.slice(1, 4); returns "ell";
 *  Replace()
 *      ===> replace replaces a part of a given string with another string or a regular expression. The original string will remain unchanged.
 *              Example:
 *                     let str = "Mind, Power, Soul";
 *                      let part = str.replace("Power, "Space"); // Mine, Space, Soul 
 *  replaceAll()
 *      ===> returns a new string after replacing all the matches of a string with a specified string or a regular expression. The original string will remain unchanged.
 *              Example: let str = "Mind, Power, Power, Soul";
 *                       let part = str.replaceAll("Power", "Space"); // 
 *                        console.log(part);// output: "Mind, Space, Space, Soul";   
 *  toUpperCase()
 *      ===> converts all the characters present in the string to upper case and returns a string with all the characters in upper case. 
 *              Example: let str = "jasmine";
 *                        let upperCased = str.toUpperCase();
 *                              console.log(upperCased); // "JASMINE";
 *  toLowerCase()
 *                Example: let str = "JASMINE";
 *                        let upperCased = str.toUpperCase();
 *                              console.log(upperCased); // "jasmine";
 * 
 *      BONUS
 *              function upperCaseFirstLetter(string) {
 *                  return string.charAt(0).toUpperCase() + string.slice(1);
 *                  }
 * 
 * 
 *                  let myString = "jasmine";
 *                  let returnedString = upperCaseFirstLetter(myString);
 *                  console.log(returnedString); // Output: "Jasmine";
 *  charAt
 *  split
 *  reverse
 *  join
 * regEx
 */