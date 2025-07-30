let user= "Hariom"
// accesing character 
console.log(user.charAt(0));

let subname= user.slice(-3,-1); // positive and negative both are possible
console.log(subname)

let str= user.toLowerCase();
console.log(str)

let str1= user.substring(1,4)  // negative index is not supported 
console.log(str1)

let str2= user.substr(0,4);
console.log(str2)
console.log(user.endsWith("omi"))  // it tells that particular string is containing a substring at the end or not
console.log(user.includes("Ha"))  // checks substring 
console.log(user.indexOf("o"))

