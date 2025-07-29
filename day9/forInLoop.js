let studnet={
    name:"Karan",
    course: "FSD",
    status:"pass",
    fees:"300000"
}
// for in loop is used for iteration over objects
for(let key in studnet){
    console.log(key+"="+studnet[key])
}
console.log(Object.keys(studnet))
console.log(Object.values(studnet))
console.log(Object.entries(studnet))