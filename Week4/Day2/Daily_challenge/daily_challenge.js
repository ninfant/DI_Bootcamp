// Create a variable called sentence. The value of the variable should be a string that contains the words “not” and “bad”.
// For example, “The movie is not that bad, I like it”.

// Create a variable called wordNot where it’s value is the first appearance (ie. the position) of the substring “not” (from the sentence variable).

// Create a variable called wordBad where it’s value is the first appearance (ie. the position) of the substring “bad” (from the sentence variable).

// If the word “bad” comes after the word “not”, you should replace the whole “not…bad” substring with “good”, then console.log the result.
// For example, the result here should be : “The movie is good, I like it”
// If the word “bad” does not come after “not” or the words are not in the sentence, console.log the original sentence.
// Example:

//   Your string is : 'This dinner is not that bad ! You cook well', 
//   --> the result is : 'This dinner is good ! You cook well'

//   Your string is : 'This movie is not so bad !' 
//   --> the result is : 'This movie is good !'

//   Your string is : 'This dinner is bad !' 
//   --> the result is : 'This dinner is bad !'


// let sentence = "The movie is not that bad, I like it"

// find the positions of "not" and "bad"
// let wordNot = sentence.indexOf("not")
// let wordBad = sentence.indexOf("bad")

// check if "bad" appears after "not" and if indexOf not returned -1
// if (wordNot !== -1 && wordBad !== -1 && wordBad > wordNot) {
    // replace "not...bad" with "good"
//     let newSentence = sentence.slice(0, wordNot) + "good" + sentence.slice(wordBad + 3)
//     console.log(newSentence.trim())
// } else {
//     console.log(sentence)
// }


