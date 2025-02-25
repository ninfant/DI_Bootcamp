// Navigation: Form And Elements

// Document forms are members of the unique collection document.forms.

// That’s a so-called “named collection”: it’s both named and ordered.
// We can use both the name or the number in the document to get the form.

// document.forms.my - the form with name="my"
// document.forms[0] - the first form in the document

// get the form
let theForm = document.forms.dogform; 
console.log(theForm);
// <form name="dogform">
//   <input name="petname" value="Rex">
//   <input name="petage" value="2">
// </form>

let theFormAgain  = document.forms[1]; // the second form on the page
// <form name="dogform">
//   <input name="petname" value="Rex">
//   <input name="petage" value="2">
// </form>
