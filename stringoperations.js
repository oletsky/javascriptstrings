let s="qwerty";
console.log(s.length); //6
console.log(s[1]); //w
s[1]='v'; //Doesn't work
console.log(s); //qwerty
console.log(s.charAt(1)); //w
console.log(s.toUpperCase()); //QWERTY
console.log(s.substr(1,3)); //wer
console.log(s.indexOf("wer")); //1
let tokens = s.split('');
console.log(tokens);
//[ 'q', 'w', 'e', 'r', 't', 'y' ]
