"use strict";
//Creating
console.log("Creating:")
let s="qwerty";
console.log(typeof s); //string
console.log(s); //qwerty
let o=new String("qwerty");
console.log(typeof o);//object
console.log(o);
//[String: 'qwerty']
console.log("---------")
//Comparison
console.log("Comparison:")
let s1="abcde";
let s2="abcde";
let ss1="abc";
let ss2="de";
let ss=ss1+ss2;
console.log(s1==s2);
//true
console.log(s1==ss);
//true
let o1=new String("abcde");
let o2=new String("abcde");
console.log(o1==o2);
//false
console.log("-----------");
console.log("Effect of eval:");
let vs='2+2';
console.log(eval(vs)); //4
let vo=new String('2+2');
console.log(eval(vo));
//[String: '2+2']
