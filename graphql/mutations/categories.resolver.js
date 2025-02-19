const { GraphQLList, GraphQLNonNull, GraphQLString } = require("graphql");
const { CategoryType } = require("../types/categories.types");

const CategoryModel = require("./../../models/Category");
const { validateToken } = require("../../utils/Atuh");

const addCategory = {

  type: CategoryType,
  args: {
    title: { type: new GraphQLNonNull(GraphQLString) },
    icon: { type: new GraphQLNonNull(GraphQLString) },
  },

  resolve: async (_, args,context) => {
    
    const {role}= await validateToken(context.req)

    if(role!=="ADMIN"){
        throw new Error("No access")
    }

    return await CategoryModel.create({
      title: args.title,
      icon: args.icon,
    });
  },
};

module.exports = { addCategory };
