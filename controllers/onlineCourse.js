import OnlineCourse from "../modals/OnlineCourse.js";
import College from "../modals/College.js";

export const createOnlineCourse = async (req, res, next) => {
  const collegeId = req.params.collegeId;
  const newOnlineCourse = new OnlineCourse(req.body);

  try {
    const savedOnlineCourse = await newOnlineCourse.save();
    try {
      await College.findByIdAndUpdate(collegeId, {
        $push: { onlineCourse: savedOnlineCourse._id },
      });
    } catch (error) {
      next(error);
    }
    res.status(200).json({ savedOnlineCourse });
  } catch (error) {
    next(error);
  }
};

export const updateOnlineCourse = async (req, res, next) => {
  try {
    const updatedOnlineCourse = await OnlineCourse.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json(updatedOnlineCourse);
  } catch (error) {
    next(error);
  }
};

export const deleteOnlineCourse = async (req, res, next) => {
  try {
    await OnlineCourse.findByIdAndDelete(req.params.id);

    res.status(200).json("OnlineCourse has been deleted");
  } catch (error) {
    next(error);
  }
};
