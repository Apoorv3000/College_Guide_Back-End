import EntranceTest from "../modals/EntranceTest.js";
import College from "../modals/College.js";

export const createEntranceTest = async(req,res,next)=>{
    const collegeId = req.params.collegeId;
    const newEntranceTest = new EntranceTest(req.body);
    
    try {
        const savedEntranceTest = await newEntranceTest.save();
        try {
          await College.findByIdAndUpdate(collegeId, {
            $push: { faculty: savedEntranceTest._id },
          });
          await EntranceTest.findByIdAndUpdate(savedEntranceTest._id, {
            $push: { college: collegeId },
          });
        } catch (error) {
          next(error);
        }
        res.status(200).json({ savedEntranceTest });
      } catch (error) {
        next(error);
      }
};

export const updateEntranceTest = async(req, res, next) => {
    try {
        const updatedEntranceTest= await EntranceTest.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedEntranceTest);
    } catch(error){
        next(error);
    }
};

export const deleteEntranceTest = async (req, res, next) => {
    try {
        await EntranceTest.findByIdAndDelete(req.params.id);

        res.status(200).json("EntranceTest has been deleted");

    } catch (error) {
        next(error);
    }
};
