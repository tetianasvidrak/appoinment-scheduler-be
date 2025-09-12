const Visit = require("~/models/visit");

const visitService = {
  createVisit: async (data) => {
    return await Visit.create(data);
  },

  getVisits: async (filter = {}) => {
    return await Visit.find(filter)
      .populate("employeeId", "name phone")
      .populate("clientId", "name phone")
      .populate("services.serviceId", "name price duration");
  },

  getVisitById: async (id) => {
    return await Visit.findById(id)
      .populate("employeeId", "name phone")
      .populate("clientId", "name phone")
      .populate("services.serviceId", "name price duration");
  },

  updateVisit: async (id, updateData) => {
    return await Visit.findByIdAndUpdate(id, updateData, { new: true })
      .populate("employeeId", "name phone")
      .populate("clientId", "name phone")
      .populate("services", "name price duration");
  },

  deleteVisit: async (id) => {
    return await Visit.findByIdAndDelete(id);
  },
};

module.exports = visitService;
