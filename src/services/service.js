const Service = require("~/models/service");

const serviceService = {
  createService: async (categoryId, name, price, duration) => {
    const service = await Service.create({
      categoryId,
      name,
      price,
      duration,
    });
    const populatedService = await service.populate(
      "categoryId",
      "name displayColor"
    );
    return populatedService;
  },

  getServices: async () => {
    return await Service.find().populate("categoryId", "name displayColor");
  },

  getServiceById: async (id) => {
    return await Service.findById(id).populate(
      "categoryId",
      "name displayColor"
    );
  },

  updateService: async (id, updateData) => {
    return await Service.findByIdAndUpdate(id, updateData, {
      new: true,
    }).populate("categoryId", "name displayColor");
  },

  deleteService: async (id) => {
    return await Service.findByIdAndDelete(id);
  },
};

module.exports = serviceService;
