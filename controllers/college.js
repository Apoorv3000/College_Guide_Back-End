import College from "../modals/College.js";

export const AddCollege =async(req,res,next)=>{
    try {
        const newCollege = new College({
            ...req.body,
        }); 
        await newCollege.save();
        res.status(200).send("Added the data successfully")
    } catch (error) {
        next(error)
    }
}