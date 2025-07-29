// these works on arrays
let nums=[1,2,3,4,5,6,7,9];

// map : iterates all the values 
nums.map((val,indx, arr)=>{
    return arr[indx]=val*5;
})
console.log(nums)

// filter 
let res= nums.filter((val, index, arr)=>val%2==0)
console.log(res)
let ex=[1,2,3,4];
// reduce 
let sum=ex.reduce((acc, val)=>acc+val,10)
console.log(sum)

// some , every , forEach