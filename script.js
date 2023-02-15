// ? Question 1:Multi dimensional Arrays
// *print out these numbers (10,8,13,136 and 4)from the array provided below
document.write('QUESTION 1' + "<br>") //text to indicate each question section

var arr = [[1, 2, 3],[4, 5, 6],7,8,9,[[10, 11, 12, [13, 4, 112]], 136, 14],];
document.write(arr[5][0][0] + "<br>")
document.write(arr[3] + "<br>")
document.write(arr[5][0][3][0] + "<br>");
document.write(arr[5][1] + "<br>")
document.write(arr[1][0] + "<br>" + "<br>")

//?Question2: Fill in the blank spaces with the elements in the sentence array
// *I am a ______ developer at ________ and i love ______________
// required output=>I am a web developer at capacity bay and i love javascript
document.write('QUESTION 2' + "<br>") //text to indicate each question section

var sentence = ["javascript", "web", "Capacity Bay"];
document.write(`I am a ${sentence[1]} developer at ${sentence[2]} and i love ${sentence[0]}` + '<br>' + "<br>");

// ?Question 3 : Use the bracket notation to print out 4th to the last character of "Generalization"
document.write('QUESTION 3' + "<br>") //text to indicate each question section

let words = 'Generalization';
document.write(words.substring(10, 11) + "<br>" + "<br>")

// ? Question 4 : Create an array and populate it with these strings
// "orange", "apple", "guava", "lemon";
document.write('QUESTION 4' + "<br>") //text to indicate each question section

let fruits = ["orange", "apple", "guava", "lemon"];
document.write(fruits + "<br>")
// Add these strings at the beginning of the array you created above
// "pea", "banana";
fruits.unshift("pea", "banana")
document.write(fruits + "<br>")
// Add these strings at the end of the array you created above.
// "Avocado", "mango";
fruits.push("Avocado", "mango")
document.write(fruits)




