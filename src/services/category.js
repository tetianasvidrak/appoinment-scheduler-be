const Category = require("~/models/category");

const categoryService = {
  createCategory: async (name, displayColor) => {
    return await Category.create({ name, displayColor });
  },

  getCategories: async () => {
    return await Category.find();
  },

  getCategoryById: async (id) => {
    return await Category.findById(id);
  },

  updateCategory: async (id, updateData) => {
    return await Category.findByIdAndUpdate(id, updateData, { new: true });
  },

  deleteCategory: async (id) => {
    return await Category.findByIdAndDelete(id);
  },
};

module.exports = categoryService;
