const userDetail=(req,res)=>{
    res.send({
        name:"Gaurav Pandey Mentor",
        company:"Adda247"
    });
}
const createUser=(req,res)=>{
    let data= req.body;
    console.log(data);
    res.send(data);
}
let obj={
    "india":"Hey i am Indian",
    "usa":"Hey i am American",
    "china":"Hey i am chineese"
}
const getUser= (req,res)=>{
    let paramData= req.params;
    let queryData=req.query;
    console.log(queryData)
    console.log(obj[paramData.name]);
    res.send({"status":"ok",intro:obj[paramData.name],name:queryData.name})
}
export { userDetail,createUser,getUser};