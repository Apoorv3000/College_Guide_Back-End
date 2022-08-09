import EntranceTest from "../modals/EntranceTest.js";

export const AddEntrancTest  =async(req,res,next)=>{
    try {
        const newEntranceTest = new EntranceTest({
            ...req.body,
        }); 
        await newEntranceTest.save();
        res.status(200).send("Added the data successfully")
    } catch (error) {
        next(error)
    }
}