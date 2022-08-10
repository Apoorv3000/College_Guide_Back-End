import College from "../modals/College.js";
import Stream from "../modals/Stream.js";
import Course from "../modals/Course.js";

export const createCollege = async (req, res, next) => {
  try {
    const newCollege = new College(req.body);
    await newCollege.save();
    res.status(200).send("Added the data successfully");
  } catch (error) {
    next(error);
  }
};

export const getAllColleges = async (req, res, next) => {
  try {
    const college = await College.find();
    res.status(200).json(college);
  } catch (error) {
    next(error);
  }
};

export const getCollegeStream = async (req, res, next) => {
  try {
    const college = await College.findById(req.params.id);
    const StreamList = await Promise.all(
      college.stream.map((stream) => {
        return Stream.findById(stream);
      })
    );

    res.status(200).json(StreamList);
  } catch (error) {
    next(error);
  }
};

export const getCollegeCourse = async (req, res, next) => {
  const streamId = req.params.streamId;

  try {
    const stream = await Stream.findById(streamId);
    const CourseList = await Promise.all(
      stream.courses.map((course) => {
        return Course.findById(course);
      })
    );
    res.status(200).json(CourseList);
  } catch (error) {
    next(error);
  }
};
