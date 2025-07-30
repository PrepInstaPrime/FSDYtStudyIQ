
try {
    let a=3;
    let b=5;
    if(a==0|| b==0){
        throw new Error("can't use zero in division")
    }
    console.log(a/5)
    console.log(JSON.parse(`{name:"karna",address:"bangalore}`))
   
} catch (error) {
    console.log(error)
}finally{
    console.log("hey i am finally")
}
console.log("hey")