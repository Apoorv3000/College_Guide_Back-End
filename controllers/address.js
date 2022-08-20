import Address from "../modals/Address.js";
import College from "../modals/College.js";

export const createAddress = async (req, res, next) => {
  const collegeId = req.params.collegeId;
  const newAddress = new Address(req.body);

  try {
    const savedAddress = await newAddress.save();
    try {
      await College.findByIdAndUpdate(collegeId, {
        $push: { location: savedAddress._id },
      });
    } catch (error) {
      next(error);
    }
    res.status(200).json({ savedAddress });
  } catch (error) {
    next(error);
  }
};

export const updateAddress = async (req, res, next) => {
  try {
    const updatedAddress = await Address.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json(updatedAddress);
  } catch (error) {
    next(error);
  }
};

export const deleteAddress = async (req, res, next) => {
  const collegeId = req.params.collegeId;
  try {
    const address = await Address.findByIdAndUpdate(req.params.id);
    if (!address) return next(createError(404, "Address not found"));

    await Address.findByIdAndDelete(req.params.id);
    try {
      await College.findByIdAndUpdate(collegeId, {
        $pull: { location: savedAddress._id },
      });
    } catch (error) {
      next(error);
    }
    res.status(200).json("Address has been deleted");
  } catch (error) {
    next(error);
  }
};

export const getAddress = async (req, res, next) => {
  try {
    const address = await Address.findById(req.params.id);
    res.status(200).json(address);
  } catch (error) {
    next(error);
  }
};
