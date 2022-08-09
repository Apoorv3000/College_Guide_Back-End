import Placement from "../modals/Placement.js";

export const AddPlacements =async(req,res,next)=>{
    try {
        const newPlacement = new Placement({
            ...req.body,
        });
        await newPlacement.save();
        res.status(200).send("Added the data successfully")
    } catch (error) {
        next(error)
    }
}