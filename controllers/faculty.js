import Faculty from "../modals/Faculty.js";

export const AddFaculty =async(req,res,next)=>{
    try {
        const newFaculty = new Faculty({
            ...req.body,
        }); 
        await newFaculty.save();
        res.status(200).send("Added the data successfully")
    } catch (error) {
        next(error)
    }
}