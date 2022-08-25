import College from "../modals/College.js";
import Research from "../modals/Research.js";

export const createResearch = async (req, res, next) => {
  const collegeId = req.params.collegeId;
  const newResearch = new Research(req.body);
  try {
    const savedResearch = await newResearch.save();
    try {
      await College.findByIdAndUpdate(collegeId, {
        $push: { research: savedResearch._id },
      });
    } catch (error) {
      next(error);
    }
    res.status(200).json({ savedResearch });
  } catch (error) {
    next(error);
  }
};
