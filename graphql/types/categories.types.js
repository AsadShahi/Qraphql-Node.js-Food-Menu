const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList } = require("graphql");
const FoodType = require("./food.types");
const foodModel= require('../../models/Food')
const CategoryType = new GraphQLObjectType({
  name: "CategoryType",
  fields: () => ({
    _id: { type: GraphQLID },
    title: { type: GraphQLString },
    icon: { type: GraphQLString },
    //  foods: {
    //   type: new GraphQLList(FoodType), // Lazy load FoodType
    //   resolve: async (source) => {
    //     try {
    //       return await foodModel.find({ category: source._id });
    //     } catch (error) {
    //       console.error("Error fetching foods:", error);
    //       throw new Error("Failed to fetch foods.");
    //     }
    //   },
    // },


  }),
});

module.exports = {
  CategoryType,
};
