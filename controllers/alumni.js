import Alumni from "../modals/Alumni.js";

export const AddAlumni =async(req,res,next)=>{
    try {
        const newAlumni = new Alumni({
            ...req.body,
        }); 
        await newAlumni.save();
        res.status(200).send("Added the data successfully")
    } catch (error) {
        next(error)
    }
}