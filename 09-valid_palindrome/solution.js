var isPalindrome = function(s) {
    var punctuationless = s.replace(/[.,"@['\]/#!$%?\^&\*;:{}=\-_`~()]/g,"");
    var finalString = punctuationless.replace(/\s{2,}/g," ");
    return finalString.toLowerCase().replace(/\s/g, '')===finalString.split("").reverse().join(" ").toLowerCase().replace(/\s/g, '');
};