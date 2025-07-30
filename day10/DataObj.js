let date= Date.now();
console.log(date)
let cdate= new Date("2025/07/30")
console.log(cdate)
console.log(cdate.toUTCString())
console.log(cdate.getFullYear())
console.log(cdate.getMonth())
console.log(cdate.getHours())
cdate.setFullYear("2026")

console.log(cdate.toUTCString())