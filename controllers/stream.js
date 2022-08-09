import Stream from "../modals/Stream.js";

export const AddStream =async(req,res,next)=>{
    try {
        const newStream = new Stream({
            ...req.body,
        }); 
        await newStream.save();
        res.status(200).send("Added the data successfully")
    } catch (error) {
        next(error)
    }
}