import OnlineCourse from "../modals/OnlineCourse.js";

export const AddOnlineCourse =async(req,res,next)=>{
    try {
        const newOnlineCourse = new OnlineCourse({
            ...req.body,
        });
        await newOnlineCourse.save();
        res.status(200).send("Added the data successfully")
    } catch (error) {
        next(error)
    }
}