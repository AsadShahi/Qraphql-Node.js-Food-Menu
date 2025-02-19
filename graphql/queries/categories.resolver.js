const { GraphQLList } = require("graphql");
const { CategoryType } = require("../types/categories.types");

const CategoryModel = require("./../../models/Category");

const categoriesResolver = {
  type: new GraphQLList(CategoryType),
  
  resolve: async () => {
    return await CategoryModel.find({});
  },
};

module.exports = { categoriesResolver };
