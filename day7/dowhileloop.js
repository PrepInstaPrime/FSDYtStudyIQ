let a=15;
let b=10;
do{
    console.log(a);
    a++;
}while(a<b)


for(let i=1;i<20;i++){
    if(i==5){
        continue;
    }
    if(i==7){
        break;
    }
    console.log(i)
}