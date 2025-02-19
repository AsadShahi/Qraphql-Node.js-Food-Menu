const { GraphQLObjectType, GraphQLSchema } = require("graphql");
const { categoriesResolver } = require("./queries/categories.resolver");
const { addCategory } = require("./mutations/categories.resolver");
const { addFood } = require("./mutations/food.resolver");
const { foodResolver } = require("./queries/foods.resolver");
const { userResolver } = require("./queries/users.resolver");
const { registerUsers, loginUser } = require("./mutations/userRegister.resolver");
const { orderResolver } = require("./mutations/order.resolver");

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    categories: categoriesResolver,
    foods:foodResolver,
    users:userResolver
  },
});

const RootMutation = new GraphQLObjectType({
  name: "RootMutation",
  
  fields: {
    addCategory,
    addFood,
    registerUsers,
    loginUser,
    orderResolver
    
  },
});

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
});

module.exports = schema;
