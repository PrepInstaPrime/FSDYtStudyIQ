import userModel from '../models/userModel.mjs';
const createUser=async (req,res)=>{
    try {
        let data= req.body;
        const storedUser= await userModel.create(data);
        console.log(data)
        res.send({status:"ok", data:storedUser})

    } catch (error) {
        res.send({status:"failed", error})
    }
}
export {createUser};