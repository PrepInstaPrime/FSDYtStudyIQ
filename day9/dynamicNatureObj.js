let obj={
    name:"student",
    course:"FSD",
    accountBalance:10000,
    get balance(){
        console.log(this.accountBalance);
    },
    set supdateBalance(value){
        this.accountBalance=value;
    }
}
obj.supdateBalance=50000
obj.balance
console.log(obj.name)
obj.name="new student";
console.log(obj.name)

