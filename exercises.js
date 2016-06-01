/**
 *
 */
/*
 *window. alert("Hello");
 */
// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------

function max(num1, num2){
    "use strict";
    if(num1 > num2){
      return num1
    } else {
      return num2
    }


    //...
}
console.log(max(5, 8));
console.assert(max(5, 8) == 8 );

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(num1, num2, num3){
    "use strict";
    if (num1 > num2 && num1 > num2){
      return num1;
    } else if (num2 > num1 && num2 > num3){
      return num2;
    } else {
      return num3;
    }
    //...
}
console.log(maxOfThree(1, 2, 3));
console.assert(maxOfThree(1, 2, 3) == 3 );
// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    "use strict";
    if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
      return true;
    } else {
      return false;
    }
    //...
}
console.log(isVowel('o'));
console.assert(isVowel('o') == true);

// ---------------------
// Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    "use strict";
    var startPhrase = phrase;
    var newPhrase = " ";
    for (var i = 0; i < startPhrase.length; i++){

      if (startPhrase.charAt(i) == 'a' || startPhrase.charAt(i) == 'e' || startPhrase.charAt(i) == 'i' || startPhrase.charAt(i) == 'o' || startPhrase.charAt(i)  == 'u' || startPhrase.charAt(i) == ' ') {
        newPhrase += startPhrase.charAt(i);
      } else {
        newPhrase += startPhrase.charAt(i) + 'o' + startPhrase.charAt(i);
      }
    }
    return newPhrase;
    //...
}
  console.log(rovarspraket('this is fun'));
  console.assert(rovarspraket('this is fun') == " tothohisos isos fofunon");
// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(anArray){
    "use strict";
    var array = anArray
    var arraySum = 0;
    for(var i = 0; i < array.length; i++ ){
      arraySum += array[i];
    }
    return arraySum;
    //...
}
console.log(sum([1,2,3,4,]));


function multiply(anArray){
    "use strict";
    var array =anArray;
    var arrayTimes = 1;
    for(var i = 0; i < array.length; i++ ){
      arrayTimes *= array[i];
    }
    return arrayTimes;
    //...
}
console.log(multiply([1,2,3,4]));
console.assert(multiply([1,2,3,4]) == 24);
// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(string){
    "use strict";
    var startString = string;
    var reverseString = '';
 for (var i = startString.length - 1; i >= 0; i--){
   reverseString += startString[i];
 }
  return reverseString;
    //...
}
console.log(reverse('cats and dogs'));
console.assert(reverse('cats and dogs') == "sgod dna stac");

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
    "use strict";

  var wordsArray = words.split(' ');
  /*The split() method splits a String object into an array of strings by separating the string into substrings.*/
  var longestWord = 0;

  for (var i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i].length > longestWord) {
      longestWord = wordsArray[i].length;
    }
  }
  return longestWord;
    //...
}
console.log(findLongestWord('the barefoot days of summer'));
console.assert(findLongestWord('the barefoot days of summer') == 8);

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
    "use strict";
    var wordsArray = words;
    var filteredArray = [];

    for (var j = 0; j < wordsArray.length; j++){
      if(wordsArray[j].length > i){
        filteredArray.push(wordsArray[j]);
      }
    }
    return filteredArray;
    //...
}

var filtered = filterLongWords(['saw', 'hammer', 'screwdriver'], 4);
console.log(filtered);
console.assert(filtered.length == 2);
console.assert(filtered[0] = 'hammer');
console.assert(filtered[1] = 'screwdriver');

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

/*function charFreq(string){
    "use strict";
    var characterArray = string.split('');
    var frequencyObject = {}

    for(var i = 0; i < characterArray.length; i++){

      // check to see if frequencyObject has a property matching characterArray[i],
      // if it does, add 1 to it's value; if not, create a new property and set value to 1.
      //use key in or has own property?
      //http://stackoverflow.com/questions/135448/how-do-i-check-if-an-object-has-a-property-in-javascript

      }

    }
    //...
}

console.log(charFreq(abbabcbdbabdbdbabababcbcbab));*/
