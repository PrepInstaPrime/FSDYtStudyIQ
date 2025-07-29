// create
let arr=["mohan","karna",1000, "raju"];
// read
console.log(arr[0])

// update
arr[0]="raj"
console.log(arr)

// delete
delete arr[2]
console.log(arr)

// methods 
console.log(arr.length)

let str=arr.join("");
console.log(arr)
console.log(str)
// adding at end
arr.push("hey")
console.log(arr)
// deletion at end
let delI=arr.pop();
console.log(arr+"and deleted value " + delI)

// unshift : add at starting
arr.unshift("check")
console.log(arr)

// shift 
let delV=arr.shift();
console.log(arr+"and deleted value " + delV)


