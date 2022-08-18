import Faculty from "../modals/Faculty.js";
import College from "../modals/College.js";

export const createFaculty = async (req, res, next) => {
  const collegeId = req.params.collegeId;
  const newFaculty = new Faculty(req.body);

  try {
    const savedFaculty = await newFaculty.save();
    try {
      await College.findByIdAndUpdate(collegeId, {
        $push: { faculty: savedFaculty._id },
      });
      await Faculty.findByIdAndUpdate(savedFaculty._id, {
        $push: { college: collegeId },
      });
    } catch (error) {
      next(error);
    }
    res.status(200).json({ savedFaculty });
  } catch (error) {
    next(error);
  }
};

export const updateFaculty = async (req, res, next) => {
  try {
    const updatedFaculty = await Faculty.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedFaculty);
  } catch (error) {
    next(error);
  }
};

export const deleteFaculty = async (req, res, next) => {
  try {
    await Faculty.findByIdAndDelete(req.params.id);

    res.status(200).json("Faculty has been deleted");
  } catch (error) {
    next(error);
  }
};
