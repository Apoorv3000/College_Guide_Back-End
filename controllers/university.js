import College from "../modals/College.js";
import University from "../modals/University.js";

export const createUniversity = async (req, res, next) => {
  try {
    const newUniversity = new University(req.body);
    await newUniversity.save();
    res.status(200).send("Added the data successfully");
  } catch (error) {
    next(error);
  }
};

export const updateUniversity = async (req, res, next) => {
  try {
    const updatedUniversity = await University.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json(updatedUniversity);
  } catch (error) {
    next(error);
  }
};

export const deleteUniversity = async (req, res, next) => {
  try {
    await University.findByIdAndDelete(req.params.id);
    res.status(200).json("University has been deleted");
  } catch (error) {
    next(error);
  }
};

export const getUniversity = async (req, res, next) => {
  try {
    const university = await University.findById(req.params.id);
    res.status(200).json(university);
  } catch (error) {
    next(error);
  }
};

export const getAllUniversity = async (req, res, next) => {
  try {
    let universities;

    let query = [
      {
        $lookup: {
          from: "streams",
          localField: "streams",
          foreignField: "_id",
          as: "stream",
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
      {
        $lookup: {
          from: "colleges",
          localField: "college",
          foreignField: "_id",
          as: "college",
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
              "streams.streamname": {
                $regex: req.query.keyword,
                $options: "i",
              },
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
        "stream.college": 0,
        "stream.createdAt": 0,
        "stream.updatedAt": 0,
        "stream._id": 0,
        updatedAt: 0,
        streams: 0,
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
    universities = await University.aggregate(query);
    res.status(200).json(universities);
  } catch (error) {
    next(error);
  }
};

export const getUniversityColleges = async (req, res, next) => {
  try {
    const university = await University.findById(req.params.id);
    const collegeList = await Promise.all(
      university.college.map((college) => {
        return College.findById(college);
      })
    );
    res.status(200).json(collegeList);
  } catch (error) {
    next(error);
  }
};
