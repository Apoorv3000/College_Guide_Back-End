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

export const updateCollege = async (req, res, next) => {
  try {
    const updatedCollege = await College.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json(updatedCollege);
  } catch (error) {
    next(error);
  }
};

export const deleteCollege = async (req, res, next) => {
  try {
    await College.findByIdAndDelete(req.params.id);
    res.status(200).json("College has been deleted");
  } catch (error) {
    next(error);
  }
};

export const getCollege = async (req, res, next) => {
  try {
    const college = await College.findById(req.params.id);
    res.status(200).json(college);
  } catch (error) {
    next(error);
  }
};

export const getAllColleges = async (req, res, next) => {
  const { qrank } = req.query;
  try {
    let colleges;

    if (qrank) {
      colleges = await College.find().sort({ rank: -1 }).limit(100);
    } else {
      colleges = await College.find();
    }
    res.status(200).json(colleges);
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
  try {
    const college = await College.findById(req.params.id);
    const courseList = await Promise.all(
      college.courses.map((course) => {
        return Course.findById(course);
      })
    );

    res.status(200).json(courseList);
  } catch (error) {
    next(error);
  }
};
