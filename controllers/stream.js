import College from "../modals/College.js";
import Course from "../modals/Course.js";
import Stream from "../modals/Stream.js";

// creating the stream for the college as a user but what should be the actual user
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

export const updateStream = async (req, res, next) => {
  try {
    const updatedStream = await Stream.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json(updatedStream);
  } catch (error) {
    next(error);
  }
};

export const deleteStream = async (req, res, next) => {
  const collegeId = req.params.collegeId;
  try {
    await Stream.findByIdAndDelete(req.params.id);
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
    res.status(200).json("Stream has been deleted");
  } catch (error) {
    next(error);
  }
};

export const getStream = async (req, res, next) => {
  try {
    const stream = await Stream.findById(req.params.id);
    res.status(200).json(stream);
  } catch (error) {
    next(error);
  }
};

export const getAllStreams = async (req, res, next) => {
  try {
    const streams = await Stream.find();
    res.status(200).json(streams);
  } catch (error) {
    next(error);
  }
};

export const getAllcourses = async (req, res, next) => {
  try {
    const stream = await Stream.findById(req.params.id);
    const CourseList = await Promise.all(
      stream.courses.map((course) => Course.findById(course))
    );
    res.status(200).json(CourseList);
  } catch (error) {
    next(error);
  }
};

export const countCollegeInStream = async (req, res, next) => {
  const stream = await Stream.findById(req.params.id);
  try {
    const list = await Promise.all(
      stream.college.map((college) => {
        return Stream.countDocuments({ college: college });
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};

export const getAllColleges = async (req, res, next) => {
  try {
    const stream = await Stream.findById(req.params.id);
    const CollegeList = await Promise.all(
      stream.college.map((college) => College.findById(college))
    );
    res.status(200).json(CollegeList);
  } catch (error) {
    next(error);
  }
};
