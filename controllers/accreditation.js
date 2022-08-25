import Accreditation from "../modals/Accreditation.js";
import College from "../modals/College.js";

export const createAccreditation = async (req, res, next) => {
  const collegeId = req.params.collegeId;
  const newAccreditation = new Accreditation(req.body);
  try {
    const savedAccreditation = await newAccreditation.save();
    try {
      await College.findByIdAndUpdate(collegeId, {
        $push: { accreditation: savedAccreditation._id },
      });
    } catch (error) {
      next(error);
    }
    res.status(200).json({ savedAccreditation });
  } catch (error) {
    next(error);
  }
};
