import Alumni from "../modals/Alumni.js";
import College from "../modals/College.js";

export const createAlumni =async(req,res,next)=>{
    const collegeId = req.params.collegeId;
    const newAlumni = new Alumni(req.body);
    
    try {
        const savedAlumni = await newAlumni.save();
        try {
            await College.findByIdAndUpdate(collegeId, {
                $push : {alumni: savedAlumni._id},
            });
            await Alumni.findByIdAndUpdate(savedAlumni._id, {
                $push : { college: collegeId },
            });
        } catch (error) {
            next(error);
        }
        res.status(200).json({ savedAlumni });
    } catch (error) {
        next(error);
    }
};

export const updateAlumni = async (req, res, next) => {
    try {
        const updatedAlumni = await Alumni.findByIdAndUpdate(
            req.params.id,
            { $set: req.body},
            { new: true }
        );

        res.status(200).json(updatedAlumni);
    }catch (error) {
        next(error);
    }
};