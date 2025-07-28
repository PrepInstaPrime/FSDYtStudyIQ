// run the code when condition is true and keep running untill condition become false
// you are given an number num , tell me how many times u can divide it by 5. 
let num=25;
let count=0;
while(num%5==0){
    count++;
    num=num/5;
}
console.log(count)