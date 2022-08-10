import College from "../modals/College.js";
import Stream from "../modals/Stream.js";

export const createStream = async (req, res, next) => {
  const collegeId = req.params.collegeId;
  const newStream = new Stream(req.body);

  try {
    const savedStream = await newStream.save();
    try {
      await College.findByIdAndUpdate(collegeId, {
        $push: { stream: savedStream._id },
      });
      await Stream.findByIdAndUpdate(savedStream._id, {
        $push: { college: collegeId },
      });
    } catch (error) {
      next(error);
    }
    res.status(200).json({ savedStream });
  } catch (error) {
    next(error);
  }
};
