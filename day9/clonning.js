/*
let obj= {
    name:"student",
    age:21,
    salary:"1.5L"
}
// shallow clonning
let copyObj=obj;
copyObj.name="karan";// impacted original object
console.log(obj) 
*/
const lodash= require('lodash')
let obj1={
    name:"iphone",
    price:1000,
    intro:function(){
        console.log(`${this.name} = ${this.price}`)
    },
    detail:{
        model:"14",
        store:"bangalore"
    }
}
/*
// spread operator or Destructuring 
let copyObj1={...obj1};
copyObj1.name="samsung"
console.log(obj1)
console.log(copyObj1)
copyObj1.intro()
copyObj1.detail.model=15;  // it will impact original obj
console.log(obj1)
*/
/*
// object assign : shallow copy 
let copyObj1=Object.assign(obj1)
copyObj1.name="samsung"
console.log(obj1)
*/
// stringyfy : functions will be ignored 
/*
let copyObj1=JSON.parse(JSON.stringify(obj1));
console.log(obj1)
copyObj1.name="samsung"
copyObj1.detail.model=15
console.log(obj1)
console.log(copyObj1)
*/
// perfect 
let copyObj1=lodash.cloneDeep(obj1);
copyObj1.name="samsung"
copyObj1.detail.model=15
console.log(copyObj1)
console.log(obj1)
copyObj1.intro()