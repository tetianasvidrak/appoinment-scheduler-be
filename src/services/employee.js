const Employee = require("~/models/employee");

const employeeService = {
  createEmployee: async (data) => {
    return await Employee.create(data);
  },

  getEmployees: async () => {
    return await Employee.find();
  },

  getEmployeeById: async (id) => {
    return await Employee.findById(id);
  },

  updateEmployee: async (id, updateData) => {
    return await Employee.findByIdAndUpdate(id, updateData, { new: true });
  },

  deleteEmployee: async (id) => {
    return await Employee.findByIdAndDelete(id);
  },
};

module.exports = employeeService;
