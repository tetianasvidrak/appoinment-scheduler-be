const Visit = require("~/models/visit");

const visitService = {
  createVisit: async (data) => {
    return await Visit.create(data);
  },

  getVisits: async (filter = {}) => {
    return await Visit.find(filter)
      .populate("employee", "name phone")
      .populate("services.category", "displayColor _id")
      .populate("client", "name phone")
      .populate("services.service", "name price duration _id");
  },

  getVisitById: async (id) => {
    return await Visit.findById(id)
      .populate("employee", "name phone")
      .populate("client", "name phone")
      .populate("services.service", "name price duration");
  },

  updateVisit: async (id, updateData) => {
    return await Visit.findByIdAndUpdate(id, updateData, { new: true })
      .populate("employee", "name phone")
      .populate("client", "name phone")
      .populate("services", "name price duration");
  },

  deleteVisit: async (id) => {
    return await Visit.findByIdAndDelete(id);
  },
};

module.exports = visitService;
