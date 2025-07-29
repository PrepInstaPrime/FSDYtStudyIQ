function add (a,...b){
    let sum=0;
    for(let i=0;i<b.length;i++){
        sum=sum+b[i];
    }
    console.log(a+sum)
}
add(4,5,6,4,5,6,7,9)