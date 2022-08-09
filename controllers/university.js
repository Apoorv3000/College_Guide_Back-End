import University from "../modals/University.js";

export const AddUniversity =async(req,res,next)=>{
    try {
        const newUniversity = new University({
            ...req.body,
        }); 
        await newUniversity.save();
        res.status(200).send("Added the data successfully")
    } catch (error) {
        next(error)
    }
}