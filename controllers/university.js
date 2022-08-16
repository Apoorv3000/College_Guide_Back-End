import University from "../modals/University.js";

export const createUniversity =async(req,res,next)=>{
    try {
        const newUniversity = new University(req.body); 
        await newUniversity.save();
        res.status(200).send("Added the data successfully")
    } catch (error) {
        next(error);
    }
};

export const updateUniversity = async (req, res, next) => {
    try {
        const updatedUniversity = await University.findByIdAndUpdate(
            req.params.id,
            { $set: req.body},
            { new: true }
        );

        res.status(200).json(updatedUniversity);
    } catch (error){
        next (error);
    }
};

export const deleteUniversity = async (req, res, next) => {
    try {
        await University.findByIdAndDelete(req.params.id);
        res.status(200).json("University has been deleted");
    } catch (error) {
        next(error);
    }
};

export const getUniversity = async (req, res, next) =>{
    try {
        const university = await University.findById(req.params.id);
        res.status(200).json(university);
    } catch (error) {
        next(error);
    }
};

export const getAllUniversities = async (req, res, next) => {
    try {


        
    } catch (error) {
        next(error);
    }
};