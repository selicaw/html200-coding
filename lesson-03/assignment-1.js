/* Regular Challenge 1*/

// Create an array, with at least 5 strings
let arr = ['Ramona', 'LuAnn', 'Jill', 'Bethenny', 'Alex'];
console.log(arr);

// Add an element to the end of the array
arr.push('Kelly');
console.log(arr);

// Remove the third element
arr.splice(2,1);
console.log(arr);

// Create a string from the elements and comma separate them
// added space after comma
let str = arr.join(', ');
console.log(str);
