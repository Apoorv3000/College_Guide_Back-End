import College from "../modals/College.js";
import Stream from "../modals/Stream.js";
import Course from "../modals/Course.js";
import Placement from "../modals/Placement.js";

export const createCollege = async (req, res, next) => {
  try {
    const newCollege = new College(req.body);
    await newCollege.save();

    res
      .status(200)
      .json({ message: "Added the data successfully", newCollege });
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
  try {
    let colleges;

    let query = [
      {
        $lookup: {
          from: "courses",
          localField: "courses",
          foreignField: "_id",
          as: "course",
        },
      },
      {
        $lookup: {
          from: "addresses",
          localField: "location",
          foreignField: "_id",
          as: "address",
        },
      },
    ];

    let page = req.query.page ? parseInt(req.query.page) : 0;
    let perPage = req.query.perPage ? parseInt(req.query.perPage) : 10;
    let skip = page * perPage;

    query.push({
      $skip: skip,
    });

    query.push({
      $limit: perPage,
    });

    if (req.query.keyword && req.query.keyword !== "") {
      query.push({
        $match: {
          $or: [
            {
              name: { $regex: req.query.keyword, $options: "i" },
            },
            {
              "course.coursename": { $regex: req.query.keyword, $options: "i" },
            },
            {
              "address.city": { $regex: req.query.keyword, $options: "i" },
            },

            {
              "address.state": { $regex: req.query.keyword, $options: "i" },
            },
          ],
        },
      });
    }

    query.push({
      $project: {
        "course.colleges": 0,
        "course.createdAt": 0,
        "course.updatedAt": 0,
        "course._id": 0,
        updatedAt: 0,
        courses: 0,
        location: 0,
      },
    });

    if (req.query.sortBy && req.query.sortOrder) {
      let sort = {};
      sort[req.query.sortBy] = req.query.sortOrder === "asc" ? 1 : -1;
      query.push({
        $sort: sort,
      });
    } else {
      query.push({
        $sort: {
          createdAt: -1,
          updatedAt: -1,
        },
      });
    }
    colleges = await College.aggregate(query);
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

export const getCollegePlacement = async (req, res, next) => {
  try {
    const college = await College.findById(req.params.id);
    const placementId = college.placementDetails;
    const address = await Placement.findById(placementId);
    //  await Promise.all(
    //   college.stream.map((stream) => {
    //     return Stream.findById(stream);
    //   })
    // );

    res.status(200).json(address);
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
