import Placement from "../modals/Placement.js";
import College from "../modals/College.js";

export const createPlacement = async (req, res, next) => {
  const collegeId = req.params.collegeId;
  const newPlacement = new Placement(req.body);
  try {
    const savedPlacement = await newPlacement.save();
    try {
      await College.findByIdAndUpdate(collegeId, {
        $push: { placementDetails: savedPlacement._id },
      });
    } catch (error) {
      next(error);
    }
    res.status(200).json({ savedPlacement });
  } catch (error) {
    next(error);
  }
};

export const updatePlacement = async (req, res, next) => {
  try {
    const updatedPlacement = await Placement.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json(updatedPlacement);
  } catch (error) {
    next(error);
  }
};

export const deletePlacement = async (req, res, next) => {
  try {
    await Placement.findByIdAndDelete(req.params.id);
    res.status(200).json("Placement has been deleted");
  } catch (error) {
    next(error);
  }
};

// export const getPlacement
