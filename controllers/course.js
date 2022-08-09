import Course from "../modals/Course.js";

export const AddCourses =async(req,res,next)=>{
    try {
        const newCourse = new Course({
            ...req.body,
        }); 
        await newCourse.save();
        res.status(200).send("Added the data successfully")
    } catch (error) {
        next(error)
    }
}